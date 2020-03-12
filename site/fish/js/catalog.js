$(document).ready(function(){
  
  var loadCatalog = {
    catalogCtn: $(document).find('.js-catalog-ctn'),
    pagination: $(document).find('.js-catalog-pagination').find('.pagination-item--active'),
    filterValue: $(document).find('.js-catalog-filter').find('option:selected'),
    sortValue:  $(document).find('.js-catalog-sort').find('option:selected'),
    preloader: '<div class="catalog-preload">' +
                 '<div class="sk-circle">' +
                    '<div class="sk-circle1 sk-child"></div>' +
                    '<div class="sk-circle2 sk-child"></div>' +
                    '<div class="sk-circle3 sk-child"></div>' +
                    '<div class="sk-circle4 sk-child"></div>' +
                    '<div class="sk-circle5 sk-child"></div>' +
                    '<div class="sk-circle6 sk-child"></div>' +
                    '<div class="sk-circle7 sk-child"></div>' +
                    '<div class="sk-circle8 sk-child"></div>' +
                    '<div class="sk-circle9 sk-child"></div>' +
                    '<div class="sk-circle10 sk-child"></div>' +
                    '<div class="sk-circle11 sk-child"></div>' +
                    '<div class="sk-circle12 sk-child"></div>' +
                 '</div>' +
               '</div>',
    notFoundMsg: '<div class="catalog-preload">По вашему запросу ничего не найдено</div>',
    defaultErrorMsg: '<div class="catalog-preload">Произошла ошибка, попробуйте позднее</div>',
    init: function(){
      var id = this.getCategoryId()
      this.getCategoryItems(id, true)
    },
    createBanner: function(prevCard) {
      $.ajax({
        type: 'GET',
        url: '/api/banners',
        data: {
          limit: 1,
          placeId: 3
        }
      }).done(function(res) {
        if (res.success && res.success === true) {
          var data = res.data[0]
          
          var img = ''
          
          if (data.file && data.file.filePath) {
            img = '<img src="' + data.file.filePath + '" alt="' + data.title + '">'
          }
          
          var banner = '<div class="catalog-cards-item catalog-cards-item-inner catalog-cards-item-inner--green">' +
            '<a href="' + data.link + '" target="_blank" rel="noreferrer nofollow">' +
            '<div class="catalog-cards-info-wrapper">' +
            '<span class="catalog-cards-info-icon">' +
            img +
            '</span>' +
            '<span class="catalog-cards-info-text">' +
            data.title +
          '</span>' +
          '</div>' +
         ' </a>' +
         ' </div>'

          $(banner).insertAfter(prevCard)
          
        }
      })
    },
    setDefaultParams: function() {
      $(document).find('.js-filter-discussed').removeClass('category-product-item--active')
      $(document).find('.js-catalog-sort').val('')
      $(document).find('.js-catalog-sort').niceSelect('update')
      $(document).find('.js-catalog-filter').val('')
      $(document).find('.js-catalog-filter').niceSelect('update')
    },
    getCategoryId: function(){
      return this.catalogCtn.data('category-id')
    },
    buildQueryParams: function(removePage, url) {
      
      var paramsObj = {}
      var sortSelect = $(document).find('.js-catalog-sort').find('option:selected')
      var filterSelect = $(document).find('.js-catalog-filter').find('option:selected')
			var filterDiscussed = $(document).find('.js-filter-discussed');
      var pagination = $(document).find('.js-catalog-pagination').find('.pagination-item--active')
      
      if (removePage.length) {
        delete paramsObj.page
      } else {
        if ($(document).find('.js-catalog-pagination').find('.pagination-item--active').length) {
          paramsObj.page = parseInt($(document).find('.js-catalog-pagination').find('.pagination-item--active').html())
        }
      }
      
      if (filterSelect.length) {
        if (filterSelect.val()) {
          paramsObj.filter = filterSelect.val()
        } else {
          if(filterDiscussed.length){
            if(filterDiscussed.hasClass('category-product-item--active')){
              paramsObj.filter = 'discussed';
            }else{
              delete paramsObj.filter
            }
          } else {
            delete paramsObj.filter
          }
        }
      }

      if(filterDiscussed.length){
        if(filterDiscussed.hasClass('category-product-item--active')){
          paramsObj.filter = 'discussed';
        }else{
          if (filterSelect.length) {
            if (filterSelect.val()) {
              paramsObj.filter = filterSelect.val()
            } else {
              delete paramsObj.filter
            }
          } else {
            delete paramsObj.filter
          }
        }
      }
      
      if (sortSelect) {
        if (sortSelect.val()) {
          paramsObj.sort = {type: sortSelect.val().split('-')[0], direction: sortSelect.val().split('-')[1] }
        } else {
          delete paramsObj.sort
        }
      }
      
      var paramString = '&'
			$.each(paramsObj, function(key, val){
     
        if (key === 'sort') {
          paramString += key +'[' + val.type + ']=' + val.direction + '&'
        } else if (key === 'filter') {
          paramString += key + '[' + val + ']=1&' 
        } else {
          paramString += key + '=' + val + '&'
        }
      })
      
      
      
			if(paramString.length <= 1){
				var HistoryParamString = '';
			}else{
				var HistoryParamString = '?' + paramString.slice(0,-1).substr(1);
			}
      
      if (url) {
        HistoryParamString = url + HistoryParamString
      }
      
      if (!url && $.isEmptyObject(paramsObj)) {
       
        HistoryParamString = document.location.pathname
      }
      
			history.pushState(null, null,HistoryParamString )
      
      return paramString.slice(0,-1)
      
    },
    getCategoryItems: function(id, initialCheck, removePage, url) {
      $(document).find('.initially-hidden').hide(0)
      var self = this
      var params = ''

      if (initialCheck) {
        if (document.location.search.length) {
          this.setInitialView(document.location.search)
          params = '&' + document.location.search.substr(1)
        }
      } else {

        this.catalogCtn.html('')
        this.catalogCtn.html(this.preloader)
        params = '&' + this.buildQueryParams(removePage, url).substr(1)
      }
      
      $.ajax({
        type: 'GET',
        url: '/api/catalogCategory/' + id +'/catalogs?_format=json' + params,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'token': $('.user-token').data('token')
				}
      }).done(function(res){
      	if (res.success && res.success === true) {
          $(document).find('.initially-hidden').show(0)
          var totalProducts = $(document).find('.js-catalog-products-num-total');
          var currentCount = $(document).find('.js-catalog-products-num-current');
          totalProducts.html(res.data.total);
          var BeforeCount = parseInt(((res.data.page - 1) * res.data.limit));
					var NowCount = BeforeCount;
          if(res.data.items.length) {
						NowCount = BeforeCount + res.data.items.length;
					}
          
					if(res.data.total == 0){
						currentCount.html('0');
					}else {
						currentCount.html((+BeforeCount + 1) + '-' + NowCount);
					}
          
          if (res.data) {
            if (res.data.items.length) {
              self.catalogCtn.html(self.buildCategoryContent(res.data.items))
              var cardPrevbanner
              
              if (self.catalogCtn.find('.js-product-item-ctn').length <=5) {
                cardPrevbanner = self.catalogCtn.find('.js-product-item-ctn:last')
              } else {
                cardPrevbanner = self.catalogCtn.find('.js-product-item-ctn').eq(4)
              }
              
              self.createBanner(cardPrevbanner)
              
              var pagination = ''
              
              if (res.data.pages && res.data.pages > 1) {
                var paginationArr = []
                for (var i = 0; i < res.data.pages; i++) {
                  paginationArr.push(i)
                }
                
                var activePaginationClass = ''
                var paginationList = paginationArr.map(function(item, index){
                  if (parseInt(index + 1) === res.data.page) {
                    activePaginationClass = 'pagination-item--active'
                  } else {
                    activePaginationClass = ''
                  }
                  
                  return '<a href="#" class=" pagination-item ' + activePaginationClass+ '">' + parseInt(index + 1)  +'</a>'
                })
                
                $(document).find('.pagination').html('<div class="pagination-item-wrapper">' + paginationList.join('') + '</div>')
                
              } else {
                $(document).find('.pagination').html('')
              }
            } else {
              self.catalogCtn.html(self.notFoundMsg)
            }
          }
        } else {
          self.catalogCtn.html(self.defaultErrorMsg)
        }
      })
    },
    setInitialView: function(params) {
      var self = this
      
      params.substr(1).split('&').map(function(param) {
       if (param.indexOf('page') !== -1) {
         var page = parseInt(param.split('=')[1])
         self.pagination.removeClass('pagination-item--active')
         $(document).find('.js-catalog-pagination').find('.pagination-item:eq(' + parseInt(page - 1) + ')').addClass('pagination-item--active')
       } else if (param.indexOf('sort') !== -1) {
         var str = param
         var sortNameStart = str.indexOf('[')
         var sortNameEnd = str.indexOf(']')
         var paramFirstPart = str.slice(sortNameStart + 1, sortNameEnd)
         var paramSecondPart = param.split('=')[1]
         var sortVal = paramFirstPart + '-' + paramSecondPart
         $(document).find('.js-modal-sorter-list-item[data-val="' + sortVal + '"]').addClass('modal-sorter-list-item--active')
         
         $(document).find('.js-catalog-sort').val(sortVal)
         $(document).find('.js-catalog-sort').niceSelect('update')
       } else if (param.indexOf('filter') !== -1) {
         var filterStr = param
         var paramNameStart = filterStr.indexOf('[')
         var paramNameEnd = filterStr.indexOf(']')
         var targetVal = filterStr.slice(paramNameStart + 1, paramNameEnd)
         $(document).find('.js-modal-sorter-list-item[data-val="' + targetVal + '"]').addClass('modal-sorter-list-item--active')
         $(document).find('.js-catalog-filter').val(targetVal)
         $(document).find('.js-catalog-filter').niceSelect('update')
       }
      })
      
    },
    buildCategoryContent: function(items) {
      
      return items.map(function(item) {
        
        var oldPrice = ''
        var measureSymbol = ''
        var url = item.defaultFile
        
        var inFavouritesCssClass = ''
        var inFavouritesTitle = 'Добавить в избранное'
        var inFavouritesAction = 'add'
        var badges = ''
        var catalogButtonClass = ''
        var catalogCount = ''
        var catalogDiscussed = ''
				var weighedItemTooltip = '';
        var weightGradation = '';
        if (item.countInCart > 0) {
          catalogButtonClass = 'catalog-cards-button-buy-active'
          catalogCount = '+' + item.countInCart
        }
        
        if (item.inFavourites) {
          inFavouritesCssClass = 'catalog-cards-label-favorite--active'
          inFavouritesTitle = 'Товар в избранном'
          inFavouritesAction = 'remove'
        }

        if (item.image) {
          url = item.image
        }
        
        if (item.measure && item.measure.symbol) {
          measureSymbol = '/' + item.measure.symbol
        }
        
        if (item.oldPrice && item.oldPrice > 0) {
          oldPrice = '<div class="catalog-cards-cost catalog-cards-cost-old">' + item.oldPrice +
            '<span> р' + measureSymbol +'</span>' +  
            '</div>'
        }
        
        if (item.badges && item.badges.length) {
        	badges = item.badges.slice(0, 1).map(function(item){
						return '<span class="catalog-cards-label catalog-cards-label-' + item.slug + '"> ' + item.title + ' </span>'
          })
        }
        
        if (item.discussed) {
          catalogDiscussed = '<span class="catalog-cards-comment-fire"><span class="icon-icon-fire"></span></span>'
        }
        var content = '<div class="catalog-cards-item js-product-item-ctn">' +
          '<div class="product-id" data-id="' + item.id + '" data-remnants="' + item.remnants + '"></div>';
				if(item.weighted) {
					if(item.measureGradation){
						weightGradation = item.measureGradation;
					}else{
						weightGradation = item.measureValue * 1000;
					}
					weighedItemTooltip = '<div class="catalog-cards-button__tooltip">В корзине <br/><span class="js-catalog-item-weight-tooltip">'+ item.weightGInCart / 1000 +'</span> кг</div>';
        	content += '<div class="product-weight" data-weight-g="' + weightGradation + '" data-gradation-g="'+item.measureGradation+'"></div>'
				}
				content +=  '<a href="/product/' + item.slug + '" >' +
              '<div class="catalog-cards-image">' +
                '<img src="' + url + '" alt="' +item.title + '" />' +
              '</div>' + 
              '<div class="catalog-cards-teaser">' +
                '<div class="catalog-cards-comment">' +
                  catalogDiscussed + 
                  '<span class="catalog-cards-comment-counter">' +
                    parseInt(item.activeReviewsQuantity) +
                  '</span>' +
                '</div>' + 
                '<div class="catalog-cards-title">' + item.title + '</div>' +
                '<div class="catalog-cards-weight">' + item.measureValue + measureSymbol + '</div>' + oldPrice +
                '<div class="catalog-cards-cost">' + item.price + '<span> р' + measureSymbol +'</span></div>' +
              '</div>' +
              '<div class="catalog-cards-label-list">' + badges +
                '<span class="js-fav-btn catalog-cards-label catalog-cards-label-favorite ' + inFavouritesCssClass + '"' +
                  ' title="' + inFavouritesTitle + '" data-action="' + inFavouritesAction + '" data-id="'+ item.id + '">' +
                  '<span class="icon-icon-favorite"></span>' +
                '</span>' +
              '</div>' +
            '</a>' +
            '<div class="catalog-cards-button-wrapper">' +
              '<div class="cart-item-data" data-count="' + 
                item.countInCart + 
                '" data-weight-g="' + 
                item.weightGInCart+ '"></div>' +
              '<a href="" class="catalog-cards-button-buy js-catalog-item-buy ' + catalogButtonClass +'">' +
                '<span class="icon-icon-shopping-cart-inner"></span>' + 
                '<span class="catalog-cards-button-buy-counter js-catalog-item-counter">' + catalogCount +'</span>' +
							'</a>' +
							weighedItemTooltip +
            '</div>' +
          '</div>'
        return content
        
      })
    }
  }
  
  if ($(document).find('.js-catalog-ctn').length) {
    loadCatalog.init()
  }
  
  $(document).on('click', '.js-catalog-pagination .pagination-item', function(e){
    e.preventDefault()
    
    if ($(this).hasClass('pagination-item--active')) {
      return false
    }
    $(document).find('.pagination-item--active').removeClass('pagination-item--active')
    $(this).addClass('pagination-item--active')
    
    loadCatalog.getCategoryItems(loadCatalog.getCategoryId(), false, false)
  })
  
  $(document).on('change', '.js-catalog-filter', function(e){
    $(document).find('.js-catalog-pagination').find('.pagination').html('')
    
    loadCatalog.getCategoryItems(loadCatalog.getCategoryId(), false, true)
  })

  $(document).on('change', '.js-catalog-sort', function(e){
    $(document).find('.js-catalog-pagination').find('.pagination').html('')
    loadCatalog.getCategoryItems(loadCatalog.getCategoryId(), false, true)
  })

  $(document).on('click', '.js-modal-sorter-list-item', function(e){
    e.preventDefault()
  })
  
  $(document).on('click', '.js-mobile-filter-apply', function(e){
    e.preventDefault()
    var $this = $(this)
    var ctn = $this.parents('.js-product-sorter-ctn')
    var chosen = ctn.find('.modal-sorter-list-item--active')
    var slug = $('.js-category-filter.modal-sorter-list-item--active').data('slug')

    chosen.each(function(){
      var $filter = $(this)

      var type = $filter.data('type')
      var val = $filter.data('val')
      var id = $filter.data('id')
      
      if ($filter.hasClass('js-category-filter')) {
        
        $(document).find('.js-catalog-ctn').data('category-id', id)

        $(document).find('.js-catalog-title').html($filter.data('title'))
        loadCatalog.setDefaultParams()
        $(document).find('.js-modal-sorter-list-item.modal-sorter-list-item--active[data-type="sort"]').removeClass('modal-sorter-list-item--active')
        
        $(document).find('.js-subcategory-product-item.category-product-item--active')
          .removeClass('category-product-item--active')

        $(document).find('.js-subcategory-product-item[data-slug="' + slug + '"]').addClass('category-product-item--active')
       
      } else {
        var select = $(document).find('.js-catalog-filter-select[data-type="'+type+'"]')
        
        select.val(val)
        select.val(val).trigger('change')
        select.val(val).niceSelect('update')
      }
    })

    if ($('.modal-sorter-list-item--active').length) {
      loadCatalog.getCategoryItems(loadCatalog.getCategoryId(), false, true, slug)
    }
    
  })

  $(window).on('popstate', function () {
    
    if (document.location.href + document.location.search !== document.referrer) {
      document.location.reload()
    }
  })

	//Переключение подкатегорий
	$(document).on('click', '.js-subcategory-product-item', function (e) {
		e.preventDefault();
		var categoryId = $(this).data('id');
    var slug = $(this).data('slug')
		var breadcrumbItem = $(document).find('.js-breadcrumb-item-subcategory');
    $(document).find('.js-catalog-ctn').data('category-id', categoryId)
    $(document).find('.js-catalog-title').html($(this).data('title'))
    $(document).find('.modal-sorter-list-item--active').removeClass('modal-sorter-list-item--active')
    $(document).find('.js-category-filter[data-slug="' + slug + '"]').addClass('modal-sorter-list-item--active')
    $(document).find('.js-catalog-pagination').find('.pagination').html('')
    
    loadCatalog.setDefaultParams()

		loadCatalog.getCategoryItems(loadCatalog.getCategoryId(), false, true, slug)
		$('.js-subcategory-product-item').removeClass('category-product-item--active');
		$(this).addClass('category-product-item--active');
		if(breadcrumbItem.length){
			breadcrumbItem.html($(this).text());
		}else{
			$('.breadcrumbs').append('<span class="breadcrumbs-item js-breadcrumb-item-subcategory">' + $(this).text() + '</span>')
		}
		if($(this).text().toLowerCase() !== 'все'){
			$('title').text('Категория ' + $(this).text());
		}else{
			$('title').text('Категория ' + $(this).data('title'));
		}

	});

	$(document).on('click', '.js-filter-discussed', function (e) {
		e.preventDefault();
		$(this).toggleClass('category-product-item--active');
		loadCatalog.getCategoryItems(loadCatalog.getCategoryId(), false, true)
	});

})


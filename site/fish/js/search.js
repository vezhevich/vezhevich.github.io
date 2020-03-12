$(document).ready(function () {

  var debounce = function (func, wait, immediate) {
    var timeout
    return function () {
      var context = this, args = arguments
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  $(document).on('keyup paste', '.js-header-search-input', debounce(function (e) {
    var $headerSearchResultCtn = $('.js-header-search-result-ctn');
    var $headerSearchResult = $headerSearchResultCtn.find('.js-header-search-result');
    var $this = $(this)
    var helper = $this.parents('.header-search-wrapper').find('.js-header-search-helper')
    var keyCode = e.which || e.keyCode;

    if ($.trim($this.val()).length > 0) {
      if (!helper.hasClass('hidden')) {
        helper.addClass('hidden').hide(0)
      }
    } else {
      if (helper.hasClass('hidden')) {
        helper.removeClass('hidden').show(0)
      }
    }
    
    

    if ($.trim($this.val()).length > 1) {
      if(keyCode == 13) {
        window.location.href = '/search?q=' + $this.val()
        
        return false
      }
      
      $.ajax({
        type: 'GET',
        url: '/search/suggestion',
        data: {q: $this.val()}
      }).done(function (response) {
          $headerSearchResultCtn.addClass('header-search-result--active');
          if (response.length !== 0) {
            $headerSearchResult.html(response);
            if (!$('.js-header-search-result-content').hasClass('scrollbar-inited')) {

              $('.js-header-search-result-content').mCustomScrollbar({
                updateOnContentResize: true
              });
            }
            
          } else {
            $headerSearchResult.html('<div class="header-search-result-item"> Ничего не найдено </div>');
          }
        })
        .fail(function () {
          $headerSearchResult.html('<div class="header-search-result-item">не удалось осуществить поиск</div>');
        })
    } else {
      $headerSearchResultCtn.removeClass('header-search-result--active');
      $headerSearchResult.html('');
    }
    
  }, 300))
  
  
  $(document).on('click', '.js-header-search-helper-link', function(e) {
    e.preventDefault()
    
    var $this = $(this)
    $this.parents('.header-search-wrapper').find('.js-header-search-input').val($this.html())
    $(document).find('.js-header-search-result-link').trigger('click')
  })
  

  $(document).on('click', '.js-header-search-result-link', function (e) {
    e.preventDefault();
    var searchString = $.trim($('.js-header-search-input').val());
    window.location.href = '/search?q=' + searchString;
  })

  $(document).on('click', '.js-header-search-button-close', function (e) {
    e.preventDefault()
    $(document).find('.header-search').removeClass('header-search--active')
    $(document).find('.header-wrapper-search').removeClass('header-wrapper-search--active')
    $(document).find('.js-header-search-result-ctn').removeClass('header-search-result--active')
    $(document).find('#inputSearch').blur()
  })

  $(document).on('click', '.header-search-button', function (e) {
    e.preventDefault()
    $(document).find('.header-search').addClass('header-search--active')
    $(document).find('.header-wrapper-search').addClass('header-wrapper-search--active')
    $(document).find('#inputSearch').focus()
  })

  if ($(document).find('.header-search ').length) {
    $(document).on('click', function (e) {

      var headerSearch = $(document).find('.header-search')
      if (headerSearch.hasClass('header-search--active') &&
        !headerSearch.is(e.target) && headerSearch.has(e.target).length === 0) {
        $(document).find('.js-header-search-button-close').trigger('click')
      }
    })
  }
  
  
  var searchPageHandler = {
    searchResultsCtn: $('.js-search-page-results'),
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
    pluralize:  function getNoun(number, one, two, five) {
      var n = Math.abs(number);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return five;
      }
      n %= 10;
      if (n === 1) {
        return one;
      }
      if (n >= 2 && n <= 4) {
        return two;
      }
      return five;
    },
    getSearchParams: function() {
      var q = $('.js-search-input').val()
      var page = 1
      var categories = []
      var special_categories = []
      var order_by = $('.js-search-page-order-by').val()
      var badge = $('.js-search-page-bagde').val()
      
      if ($(document).find('.pagination-item--active').length) {
        page = $(document).find('.pagination-item--active').html()
      }

      var params
      
      if ($.trim(q).length === 0) {
        params = null
        
        return params
      }
      
      params = {
        q: q,
        page: page
      }
      
      if (order_by && order_by !== 0) {
        params.order_by = order_by
      }

      if (badge && badge != 0) {
        params.badge = badge
      }
      
      $(document).find('.js-search-page-special-categories').each(function(){
        if ($(this).prop('checked') === true) {
          special_categories.push($(this).data('id'))
        }
      })
      
      if (special_categories.length) {
        params.special_categories = special_categories
      }

      $(document).find('.js-search-page-categories').each(function(){
        if ($(this).prop('checked') === true ) {
          categories.push($(this).data('id'))
        }
      })

      if (categories.length) {
        params.categories = categories
      }
      
      return params
      
    },
    updateUrl: function() {
      var params = this.getSearchParams()
      var path = document.location.pathname
      var urlString = ''
      
      if (params) {
        Object.keys(params).map(function(objectKey, index) {
          var value = params[objectKey]
          if (objectKey === 'categories') {
            var categoriesParam = value.map(function(param){
              return 'categories[]=' + param + '&'
            })
            urlString += categoriesParam.join('')

          } else if (objectKey === 'special_categories') {
            var specialCategoriesParam = value.map(function(param){
              return 'special_categories[]=' + param + '&'
            })
            urlString += specialCategoriesParam.join('')
          }
          else {
            urlString += objectKey + '=' + value + '&'
          }

        })
        urlString = urlString.slice(0,-1)
        history.pushState(null, null, path + '?' + urlString )
      } else {
        history.pushState(null, null, path )
      }
      
    },
    disableControls: function() {
      $('.js-search-page-order-by').prop('disabled', true)
      $('.js-search-page-bagde').prop('disabled', true)
      $('.js-search-page-special-categories').prop('disabled', true)
      $('.js-search-page-categories').prop('disabled', true)
    },
    enableControls: function() {
      $('.js-search-page-order-by').prop('disabled', false)
      $('.js-search-page-bagde').prop('disabled', false)
      $('.js-search-page-special-categories').prop('disabled', false)
      $('.js-search-page-categories').prop('disabled', false)
    },
    sendSearchRequest : function() {
      
      this.updateUrl()
      var self = this
      
      var params = this.getSearchParams()
      
      
      if (!params) {
        self.buildResults('empty')
        return
      }
      
      this.searchResultsCtn.html(this.preloader)
      this.disableControls()
      
      $.ajax({
        type: 'GET',
        url: '/search',
        data: params
      }).done(function (res) {
        self.buildResults(res)
      }).fail(function() {
        self.buildResults('err')
      }).always(function(){
        self.enableControls()
      })
      
    },
    buildResults: function(data) {
      
      var foundNumCtn = $('.js-search-page-items-num')
      var foundUnitsCtn = $('.js-search-page-items-units')
      var filtersCtn = $('.js-search-filters')
      var filterSelect = $('.js-search-page-bagde')
      
      if (data === 'err' ) {
        this.searchResultsCtn.html(this.defaultErrorMsg)
      } else if (data === 'empty') {
        this.searchResultsCtn.html(this.notFoundMsg)
      } else { 

        this.searchResultsCtn.html(data)
        
        if (this.searchResultsCtn.find('.catalog-cards').children().length === 0) {
          this.searchResultsCtn.find('.catalog-cards').html(this.notFoundMsg)
        }
      }

      var itemsLength = this.searchResultsCtn.find('.catalog-cards').children('.js-product-item-ctn').length
      
      foundNumCtn.html(itemsLength)
      foundUnitsCtn.html(this.pluralize(itemsLength, 'товар', 'товара', 'товаров'))
      
      if (itemsLength === 0 && !filtersCtn.hasClass('category-product--hidden')) {
        if (filterSelect && parseInt(filterSelect.val(), 10) === 0) {
          filtersCtn.addClass('category-product--hidden')
        }
      }

      if (itemsLength > 0 && filtersCtn.hasClass('category-product--hidden')) {
        filtersCtn.removeClass('category-product--hidden')
      }

      if (filterSelect && parseInt(filterSelect.val(), 10) !== 0) {
        filtersCtn.removeClass('category-product--hidden')
      }
      
    },
    checkFiltersVisibility: function() {
      var filterSelect = $('.js-search-page-bagde')
      var filtersCtn = $('.js-search-filters')
      
      if (filtersCtn.hasClass('category-product--hidden') && filterSelect && parseInt(filterSelect.val(), 10) !== 0) {
        filtersCtn.removeClass('category-product--hidden')
      }
    }
  }
  
  if ($('.js-search-filters').length) {
    searchPageHandler.checkFiltersVisibility()
  }
  
  $(document).on('keyup', '.js-search-input', debounce(function () {
    searchPageHandler.sendSearchRequest()
  }, 300) )

  $(document).on('change paste', '.js-search-input', function() {
    searchPageHandler.sendSearchRequest()
  })
  
  $(document).on('click', '.js-search-category', function(e){
    $(this).toggleClass('modal-sorter-list-item--active')
  })
  
  $(document)
    .on('change', '.js-search-page-categories, .js-search-page-special-categories, .js-search-page-order-by, .js-search-page-bagde', function(){
    var $this = $(this)
     
      if ($this.hasClass('js-search-page-categories')) {
        var id =  $(this).data('id')
        var catalogFilterLabel = $(document).find('.js-search-category[data-id="' + id + '"]')
        var dropdownCheckbox = $(document).find('.js-dropdown-search-category[data-id="' + id+ '"]') 
        
          if ($this.prop('checked') === true) {
            catalogFilterLabel.addClass('modal-sorter-list-item--active')
            dropdownCheckbox.prop('checked', true)
          } else {
            catalogFilterLabel.removeClass('modal-sorter-list-item--active')
            dropdownCheckbox.prop('checked', false)
          }
      }
      searchPageHandler.sendSearchRequest()
  })
  
  $(document).on('click', '.js-search-page-clear', function(e){
    $('.js-search-input').val('')
    searchPageHandler.sendSearchRequest()
  })
  
  $(document).on('click', '.js-search-page-category-apply', function(e){
    e.preventDefault()

    var $ctn = $(this).parents('.js-modal-search-category-list')
    $ctn.find('.js-search-category').each(function(){
      var id = $(this).data('id')
      var checkbox = $(document).find('.js-search-page-categories[data-id="' + id + '"]')

      if ($(this).hasClass('modal-sorter-list-item--active')) {
        checkbox.prop('checked', true)
      } else {
        checkbox.prop('checked', false)
      }

      checkbox.trigger('change')
    })
    
  })
  
  $(document).on('click', '.js-dropdown-category-submit', function() {
    var $ctn = $(this).parents('.product-sorter-category-js')
    $ctn.find('.js-dropdown-search-category').each(function(){
      var id = $(this).data('id')
      var checkbox = $(document).find('.js-search-page-categories[data-id="' + id + '"]')

      if ($(this).prop('checked') === true) {
        checkbox.prop('checked', true)
      } else {
        checkbox.prop('checked', false)
      }

      checkbox.trigger('change')
      
    })
  })
  
  
  $(document).on('click', '.js-search-category', function(e){
    e.preventDefault()
    var $this = $(this)
    var id = $this.data('id')
    var type = $this.data('type')
    $this.toggleClass('catalog-list-item--active')
    var checkbox = $(document).find('input[type="checkbox"][data-type="' + type +'"][data-id="' + id +'"]')
    
    $(document).find(checkbox)
      .prop('checked', !checkbox.prop('checked'))
  })
  
  $(document).on('click', '.js-search-page-pagination .pagination-item', function(e){
    e.preventDefault()
    
    if ($(this).hasClass('pagination-item-next')) {
      if ($(document).find('.pagination-item--active').next('.pagination-item').length === 0) {
        return false
      }
      $(document).find('.pagination-item--active').next('.pagination-item').addClass('pagination-item--active')
      $(document).find('.pagination-item--active:first').removeClass('pagination-item--active')
    } else {
      $(document).find('.pagination-item--active').removeClass('pagination-item--active')
      $(this).addClass('pagination-item--active')
    }
    
    searchPageHandler.sendSearchRequest()
  })
  
  
  $(document).on('click', '.js-search-page-sorter-apply', function(e){
    e.preventDefault()
    var $this = $(this)
    var chosen = $this.parents('.js-product-sorter-ctn').find('.modal-sorter-list-item--active')
    
    if (chosen.length === 0) {
      return false
    }
    
    var val = chosen.data('val')
    $(document).find('.js-search-page-order-by').val(val)
    $(document).find('.js-search-page-order-by').niceSelect('update')
    $this.parents('.js-product-sorter-ctn').find('.mfp-close').trigger('click')
    searchPageHandler.sendSearchRequest()
  })

  $(document).on('click', '.js-search-page-filter-apply', function(e){
    e.preventDefault()
    var $this = $(this)
    var chosen = $this.parents('.js-product-filter-ctn').find('.modal-sorter-list-item--active')

    if (chosen.length === 0) {
      return false
    }
    
    var val = chosen.data('val')
    $(document).find('.js-search-page-bagde').val(val)
    $(document).find('.js-search-page-bagde').niceSelect('update')
    $this.parents('.js-product-filter-ctn').find('.mfp-close').trigger('click')
    searchPageHandler.sendSearchRequest()
  })

});
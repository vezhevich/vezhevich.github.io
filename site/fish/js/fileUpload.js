$(document).ready(function(){
  
  var handleFileUpload = {
    appendUploaded: function (file, ctn, uploadedData) {
      
      var fileItem = '<div class="uploaded-file-item">' +
        '<span class="uploaded-file-item__name">' + uploadedData.title + '</span> ' +
        '<a href="#" class="js-remove-uploaded-file remove-uploaded-file" data-id="' + uploadedData.id + '">×</a>' +  
        '</div>'
      
      var input = '<input type="hidden" type="hidden" class="js-review-file"  data-id="' + uploadedData.id + '" name="files[]" value="' + uploadedData.id + '" />'
      
      $(ctn).find('.js-uploaded-files-list').append(fileItem)
      $(ctn).find('.js-uploaded-files-list').append(input)
      
    },
    handleAvatarUpload: function(file, ctn, uploadedData) {
      
      $.ajax({
        url: '/api/cabinet/profile-photo',
        type: 'POST',
        data: {
          file_id: uploadedData.id,
          previewSize: 'd110'
        },
        'headers': {'token': $('.user-token').data('token')}
      }).done(function(res) {
        if (res.success && res.success === true) {
          $(ctn).css('background-image', "url('" + res.data.preview + "')")
          $('.header-auth-user').css('background-image', "url('" + res.data.preview + "')")

          if (!$(ctn).hasClass('avatar-uploaded')) {
            $(document).find('.js-avatar-add-file').html('<span>Заменить</span>')
            $(ctn).addClass('avatar-uploaded')
          }
          if ($(ctn).find('.js-avatar-remove-file').length === 0) {
            $(ctn)
              .append('<a href="javascript:void(0);"><span class="js-avatar-remove-file">Удалить</span></a>')
            $(document).find('.js-cabinet-aside-head-group-button')
              .append('<button class="btn-default-action js-avatar-remove-file" type="button">удалить</button>')
          }
          
        }
      })
      
    },
    showErrors: function(err, ctn) {
      $(ctn).find('.js-file-errors').html(err)
    },
    clearErrors: function(ctn) {
      $(ctn).find('.js-file-errors').html('')
    }
  }
  
  
  var $fileUploader = $('.js-dropzone')

  if ($fileUploader.length) {

    var uploadUrl = '/api/files'

    if ($fileUploader.data('upload-url')) {
      uploadUrl = $fileUploader.data('upload-url')
    }
    var token = $('.user-token').data('token')

    var uploader = new Dropzone( '.js-dropzone', {
      url: uploadUrl,
      'headers': {'token': token},
      paramName: 'files[]'
    })
    if (!$fileUploader.data('type') && $fileUploader.data('type') !== 'avatar-upload') {
      $fileUploader.addClass('dropzone')
    }

    uploader.on('addedfile', function() {
      var ctn = $(this)[0].element
      handleFileUpload.clearErrors(ctn)
    })

    uploader.on('success', function(file, res) {
      var ctn = $(this)[0].element
      var uploadedData = res.data[0]
      
      if (res.success && res.success === true) {
        if ($(ctn).data('type') && $(ctn).data('type') === 'avatar-upload') {
          handleFileUpload.handleAvatarUpload(file, ctn, uploadedData)
        } else {
          if ($(ctn).find('.js-review-file').length >= parseInt($(ctn).data('max-files'), 10)) {
            handleFileUpload.showErrors('Максимально допустимое количество файлов ' + parseInt($(ctn).data('max-files'), 10) , $(ctn))
            return false 
          }
          handleFileUpload.appendUploaded(file, ctn, uploadedData)
        }
      }
    })

    uploader.on('error', function(file, response, requestParams) {

      var ctn = $(this)[0].element
      handleFileUpload.clearErrors(ctn)
      
      
      var err = 'Произошла ошибка, попробуйте позднее'
      
      var statuses = {
        413: 'Превышен максимальный размер',
        414: 'Недопустимый формат файла'
      }
      
      if (requestParams) {
        Object.keys(statuses).map(function(objectKey) {
          var value = statuses[objectKey];
          if (requestParams.status === parseInt(objectKey, 10)) {
            err = value
          }
        })

        if ($(ctn).data('type') && $(ctn).data('type') === 'avatar-upload') {
        } else {
          handleFileUpload.showErrors(file.name + ':' + err, ctn)
        }
      }
    })

    uploader.on('maxfilesexceeded', function() {
      var ctn = $(this)[0].element
      handleFileUpload.showErrors('Превышено максимальное количество файлов', ctn)
    })
    
  }
  
  $(document).on('click', '.js-remove-uploaded-file', function(e) {
    
    e.preventDefault()
    var $this = $(this)
    var id = $this.data('id')
    
    $(document).find('.js-review-file[data-id="' + id + '"]').remove()
    $(document).find('.dz-preview[data-id="'+ id +'"]').remove()
    
    $this.parents('.uploaded-file-item').remove()
  })
  
  $(document).on('click','.js-avatar-add-file', function() {
    $(document).find('.js-dropzone[data-type="avatar-upload"]').trigger('click')
  })
  
  $(document).on('click', '.js-avatar-remove-file', function(e) {
    e.preventDefault()

    var avatarDropzone = $(document).find('.js-dropzone[data-type="avatar-upload"]')
    var $this = $(this)
    
    $.ajax({
      url: '/api/cabinet/profile-photo',
      type: 'DELETE',
      'headers': {'token': $('.user-token').data('token')}
    }).done(function(res) {
      if (res.success && res.success === true) {
        avatarDropzone.css('background-image', "url('" + avatarDropzone.data('default-avatar') + "')")
        $('.header-auth-user').css('background-image', "url('" + avatarDropzone.data('default-avatar') + "')")
        avatarDropzone.removeClass('avatar-uploaded')
        $(document).find('.js-avatar-add-file').html('<span>Добавить</span>')
        $this.remove()
      }
    })
  })
  
})


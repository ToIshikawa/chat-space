$(function() {

  function buildMessage(message){
    var html = `<div class="message">
                  <div class="message__upper">
                    <div class="upper__name">
                      ${message.user_name}
                    </div>
                    <div class="upper__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="message-text">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <img class="lower-message__image" src='${message.image.url}'>
                </div>`
    return html
  }

  $("#new_message").on('submit',function(){
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message)
      $('.messages').append(html)
      $('#message_content').val("")
      $('div').animate({scrollTop: $(document).height()})
    })
    .fail(function(){
      alert('messageか画像を入力してください')
    })
    
    return false;
  })
});
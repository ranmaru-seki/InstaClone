$(function(){
  function buildHTML(comment){
    let html =
      `<div class="PostInfo__yourComments-wrapper">
        <a href="/users/${comment.user_id}"><img src="${comment.image}" class="PostInfo__yourComments--image UserShow-image"></a>
        <a class="PostInfo__yourComments--name UserShow-name", href="/users/${comment.user_id}">${comment.user_name}</a>
        <div class="PostInfo__yourComments--contents">
          ${comment.content}
        </div>
      </div>`
    return html
  }
  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      dataType: 'json',
      data: formData,
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data);
      $('.PostInfo__yourComments').append(html);
      $('.Form')[0].reset();
      $('.PostInfo__yourComments').animate({ scrollTop: $('.PostInfo__yourComments')[0].scrollHeight});
      $('.PostInfo__contents').prop("disabled", false);
    })
    .fail(function() {
      console.log("error");
    })
  });

  $('.OwnComment').on('click', function(e){
    e.preventDefault()
    console.log('クリックできたよ')
  })



});
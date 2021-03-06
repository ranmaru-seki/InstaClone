
$(function(){
  $('#input_image').change(function(e){
    //ファイルオブジェクトを取得する
    var file = e.target.files[0];
    var reader = new FileReader();

    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#img_prev").attr("src", e.target.result);
        $("#img_prev").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);

  });

  $('#input_user_image').change(function(e){
    //ファイルオブジェクトを取得する
    console.log('sss')
    var file = e.target.files[0];
    var reader = new FileReader();

    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#user_img_prev").attr("src", e.target.result);
        $("#user_img_prev").attr("title", file.name);
        $("#user_img_prev").css('display', 'block');
      };
    })(file);
    reader.readAsDataURL(file);

  });
});

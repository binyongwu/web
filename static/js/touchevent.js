//监听滚动到底部后上拉触发自动跳转下一页
function loctionUrl(url){
     var content_height = $('.content').height();
     var get_scroll_height = $('.get_scroll_height').height();
     var scrollBottom = false;
     touch.on($('.content'), 'dragstart', function (ev) {
         if($('.content').scrollTop() >= get_scroll_height - content_height){
             scrollBottom = true;
         }else{
             scrollBottom = false;
         }
     });
     touch.on($('.content'), 'dragend', function (ev) {
         if(scrollBottom && ev.y < -150){
             window.location.href = url;
         }
     });
}
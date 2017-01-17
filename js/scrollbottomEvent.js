/**
* 依赖jQuery监听滚动底部触发事件
**/
;(function( $ ) {

    var timerLoadInfo = null;

    //自动开启监听
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();

        if( scrollHeight - (scrollTop+windowHeight) < 70 ) {
            //页面到达底部，可以加载更多微博数据
            clearTimeout(timerLoadInfo);
            timerLoadInfo = setTimeout(function() {
                $(window).trigger('scrollToBottom');
            }, 500);
        }
    });

})( jQuery );
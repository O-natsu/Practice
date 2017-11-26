$(function(){
    // 対象の要素を取得
    var loopSlider = $(".loop-slider");
    // 1周するまでの時間
    var slideSec = 20000;
 
    loopSlider.each(function(){
        var loopElem = $(this); // div .loop-slider
        // 最初の要素の内幅
        var loopElemInnnerWidth = loopElem.innerWidth();
        var loopUlist = loopElem.find("ul");
        var loopList = loopUlist.find("li");
        // li要素内の外幅を取得 ≒ 画像サイズ
        var loopListOuterWidth = loopList.outerWidth();
        // <li>の要素分widthを計算するため要素数を取得
        var listCount = loopList.length;
        var loopElemWidth = loopListOuterWidth * listCount; // 1800 150*12
 
        // li要素分のwidthが外幅より大きい場合にスライドさせる。
        if (loopElemWidth > loopListOuterWidth) {
            loopUlist.css({
                width: loopElemWidth
            });
            loopElem.css({
                width: loopElemWidth * 2
            });
            slideAnimation();
        }

        // アニメーションを行う
        function slideAnimation() {
            var hoge = loopElem.width();
            loopElem.animate({
                left: '-' + ((hoge)/2) + 'px'
            },
            slideSec,
            'linear',
            function() {
                loopElem.css({ left: '0' });                
                slideAnimation();
            }
            )};
    });
});
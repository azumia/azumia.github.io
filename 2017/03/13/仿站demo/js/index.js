/* 
 * @Author: Marte
 * @Date:   2016-06-05 11:51:45
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-07-01 00:26:32
 */

$(function() {
    var index = 0;
    var timer = null;
    var pic = $(".slide-pic > li");
    var num = $(".slide-num > li");
    var slidebar = $(".slidebar");
    var left = $("#left");
    var right = $("#right");
    //单击左箭头       
    left.click(function() {
        index--;
        if (index < 0) {
            index = num.length - 1
        };
        changeOption(index);
    });
    //单击右箭头       
    right.click(function() {
        index++;
        if (index >= num.length) {
            index = 0
        };
        changeOption(index);
    });
    //鼠标划在窗口上面，停止计时器       
    slidebar.mouseover(function() {
        clearInterval(timer);
    });
    //鼠标离开窗口，开启计时器       
    slidebar.mouseout(function() {
        timer = setInterval(run, 4000)
    });
    //鼠标划在页签上面，停止计时器，手动切换       
    for (var i = 0; i < num.length; i++) {
        num[i].id = i;
        // num[i].onmouseover = function() {
        //     clearInterval(timer);
        //     changeOption(this.id);
        // };
        $(num[i]).mouseover(function() {
            clearInterval(timer);
            changeOption(this.id);
        });
    }
    //定义计时器       
    timer = setInterval(run, 4000)
        //封装函数run       
    function run() {
            index++;
            if (index >= num.length) {
                index = 0
            };
            changeOption(index);
        }
        //封装函数changeOption       
    function changeOption(curindex) {
        //console.log(index)
        for (var j = 0; j < num.length; j++) {
            $(pic[j]).css('display', 'none');
            $(num[j]).removeClass('active');
        }
        index = curindex;
        $(num[curindex]).addClass('active');
        $(pic[curindex]).fadeIn('300', function() {
            $(pic[curindex]).css('display', 'block');
        });

    }

    /* favourite slidebar */
    var $favul = $(".fav-slidebar ul");
    var $favleft = $("#fav-left");
    var $favright = $("#fav-right");
    var favindex = 1;

    $favright.click(function() {
        if (favindex < 4) {
            $favul.animate({
                left: -(favindex + 1) * 1000 + 'px'
            }, "normal");
            favindex++;
        } else {
            if (favindex == 4) {
                $favul.animate({
                    left: -(favindex + 1) * 1000 + 'px'
                }, "normal", function() {
                    favindex = 1;
                    $favul.css('left', '-1000px');
                });

            }
        }
    });
    $favleft.click(function() {
        if (favindex > 1) {
            $favul.animate({
                left: -(favindex - 1) * 1000 + 'px'
            }, "normal");
            favindex--;
        } else {
            if (favindex == 1) {
                $favul.animate({
                    left: -(favindex - 1) * 1000 + 'px'
                }, "normal", function() {
                    favindex = 4;
                    $favul.css('left', '-4000px');
                });

            }
        }
    });
    /* end favourite slidebar */

    /* commom content */
    var $content_tap = $(".lt li");
    var $content_list = $(".lc-content li.lc-item");
    for (var i = 0; i < $content_tap.length; i++) {
        $content_tap[i].tab_index = i;
        $($content_tap[i]).hover(function() {
            for (var j = 0; j < $content_tap.length; j++) {
                $($content_tap[j]).removeClass('ltactive');
            }
            for (var k = 0; k < $content_list.length; k++) {
                $($content_list[k]).removeClass('lcactive');
            }
            $(this).addClass('ltactive');
            $($content_list[this.tab_index]).addClass('lcactive');
        });
    }

    /* end common content */

    /* content slider */
    var ccindex = 0;
    var cctimer = null;
    var ccpic = $(".lca-pic > li");
    var ccnum = $(".lca-num > li");
    var ccslider = $(".lca-pic");
    var ccslidebar = $(".cc-center-middle");
    var ccleft = $("#lca-left");
    var ccright = $("#lca-right");
    //单击左箭头       
    ccleft.click(function() {
        ccindex--;
        ccchangeOption(ccindex);
        if (ccindex <= 0) {
            ccindex = ccpic.length - 2;
        };
    });
    //单击右箭头       
    ccright.click(function() {
        ccindex++;
        ccchangeOption(ccindex);
        if (ccindex >= ccpic.length - 1) {
            ccindex = 1
        };
    });
    //鼠标划在窗口上面，停止计时器       
    ccslidebar.mouseover(function() {
        clearInterval(cctimer);
    });
    //鼠标离开窗口，开启计时器       
    ccslidebar.mouseout(function() {
        cctimer = setInterval(ccrun, 4000)
    });
    //鼠标划在页签上面，停止计时器，手动切换       
    for (var i = 0; i < ccnum.length; i++) {
        ccnum[i].id = i;
        $(ccnum[i]).mouseover(function() {
            clearInterval(cctimer);
            ccindex = parseInt(this.id) + 1;
            ccchangeOption(ccindex);
        });
    }
    //定义计时器       
    cctimer = setInterval(ccrun, 4000)
        //封装函数run       
    function ccrun() {
            ccindex++;
            ccchangeOption(ccindex);
            if (ccindex >= ccpic.length - 1) {
                ccindex = 1
            };
        }
        //封装函数changeOption       
    function ccchangeOption(curindex) {
            for (var j = 0; j < ccnum.length; j++) {
                $(ccnum[j]).removeClass('active');
            }
            if (curindex == 0) {
                $(ccnum[ccnum.length - 1]).addClass('active');
                $(ccslider).animate({
                    left: curindex * -439 + 'px'
                }, "normal", function() {
                    $(ccslider).css('left', (ccpic.length - 2) * -439 + 'px');
                });
            } else {
                if (curindex == ccpic.length - 1) {
                    $(ccnum[0]).addClass('active');
                    $(ccslider).animate({
                        left: curindex * -439 + 'px'
                    }, "normal", function() {
                        $(ccslider).css('left', -439 + 'px');
                    });
                }
                else {
                    $(ccnum[curindex - 1]).addClass('active');
                    $(ccslider).animate({
                        left: curindex * -439 + 'px'
                    }, "normal");
                }
            }
        }
        /* end content slider */
});
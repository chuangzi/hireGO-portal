
function style(){
    var winHeight = parseFloat($(window).height());
//  var top = parseFloat($(".por-content .down-main").css("paddingTop"));
    var downHei = parseFloat($(".por-content .pro-five .top-text").css("height"));
    var firHei = parseFloat($(".por-content .down-main:first-child .text-box").css("height"));
    var inNewHeight,newHeight;

    if(winHeight > downHei){
        inNewHeight = winHeight*0.58;
    }else{
        inNewHeight = winHeight;
    }
    if(winHeight > firHei){
        newHeight =  winHeight*0.54;
    }else{
        newHeight = winHeight;
    }

    if(parseFloat($(window).width()) > 0 && parseFloat($(window).width()) < 1060){
        $(".por-content .down-main").css("height",newHeight+"px");
        if(inNewHeight < 441){
            $(".por-content .win-height").css("height","590px");
        }else{
            $(".por-content .win-height").css("height",inNewHeight+"px");
        }
    }else{
        $(".por-content .down-main").css("height",winHeight+"px");
        $(".por-content .win-height").css("height",winHeight+"px");
    }

    var textDiv = parseFloat($(".por-content .down-main:first-child").css("height"));
    if(textDiv <= 564){
        $(".por-content .down-main:first-child .text-box").css("top",0);
    }

    var goodsWid = parseFloat($(".por-content .all-goods").css("height"));
    $(".por-content .all-goods > div").css("height",goodsWid+"px");

    var imgHeight = parseFloat($(".por-content .down-img img").css("height"))*0.545;
    $(".por-content .down-img img").css("width",imgHeight+"px");

    var oneDivHei = parseFloat($(".por-content .down-main .down-img").css("height"));
//    var twoDivHei = parseFloat($(".por-content .down-one .text-box").css("height"));

//    var oneImgHeight = parseFloat($(".por-content .down-one .img-box>img").css("height"));
    var twoImgWidth = parseFloat($(".por-content .down-two .img-box>img").css("width"));

//    if(twoDivWidth < twoImgWidth){
//        $(".por-content .down-two .img-box>img").css({
//            "height": "auto",
//            "width": "100%",
//            "marginTop":"5%"
//        });
//    }else if(twoDivWidth >= twoImgWidth){
//        $(".por-content .down-two .img-box>img").css({
//            "height": "70%",
//            "width": "auto",
//            "marginTop":"8%"
//        });
//    }

    if(oneDivHei < 563){
        $(".por-content .down-one .img-box>img").css({
            "height": "82%",
            "width": "auto"
        });
    }else if(oneDivHei >= 563){
        $(".por-content .down-one .img-box>img").css({
            "height": "auto",
            "width": "80%"
        });
    }
}

$(function(){
    style();

    //    页面导航所有绑定事件
    $("#head .por-nav-one").bind("mouseover",function(event){
        var thisId = $(this).attr("id");
        if(thisId == undefined||thisId==""||thisId==null){
            $(this).css("color","#f84343");
        }
    }).bind("mouseout",function(event){
        var thisId = $(this).attr("id");
        if(thisId == thisId||thisId==""||thisId==null){
            $(this).css({
                "color":"#fff",
                "text-decoration":"none"
            });
        }
    }).bind("click", function(event){
//      var thisClass = $(this).attr("class").replace("por-nav-one ","");
        var thisClass = "arr-" + $(this).attr("class").replace(/[^0-9]/ig, "");
        if(thisClass == "arr-0"){
            $("body,html").animate({
                scrollTop:0
            },300);
        }
        var divObj = $(".por-content .quick-arr");
        for(var i = 0;i < divObj.length;i++){
            var thisDiv = $(divObj).eq(i).attr("class");
//          var str_after= thisDiv.substring(thisDiv.length-5, thisDiv.length);
            var str_after= "arr-" + thisDiv.replace(/[^0-9]/ig, "");
            if(str_after == thisClass){
                var scroll_offset = $(divObj).eq(i).offset();
                $("body,html").animate({
                    scrollTop:scroll_offset.top - 68  //让body的scrollTop等于pos的top，就实现了滚动
                },300);
            }
        }
    });

    //   回到顶部
    $("#arr-top").bind("click",function(event){
        $("body,html").animate({
            scrollTop:0
        },500);
    });


    //  滚动事件
    $(window).scroll(function() {
        var t = $(document).scrollTop() || $("body").scrollTop();
        var top = parseFloat($(window).height());
        if( t >= top ) {
            $("#arr-top").show();
        } else {
            $("#arr-top").hide();
        }
        
		var thisObj = $(".por-content .mains");
		for(var i = 0;i < thisObj.length;i++){
			var thisClass = $(thisObj).eq(i).attr("class");
			if(thisClass.indexOf("arr") > -1){
				var scroll_offset = $(thisObj).eq(i).offset().top - 120 - t;
				if(scroll_offset <= 0){
				 	var _this = "arr-" + thisClass.replace(/[^0-9]/ig, "");
				 	var navObj = $(".header .por-nav-one");
				 	for(var j = 0;j < navObj.length;j++){
				 		var navClass = $(navObj).eq(j).attr("class");
				 		var str = "arr-" + navClass.replace(/[^0-9]/ig, "");
				 		if(_this == str){
				 			$(".header .por-nav-one").attr("id","");
					        $(".header .por-nav-one").css({
					            "background":"transparent",
					            "color": "#fff"
					        });
				 			
				 			$(navObj).eq(j).attr("id","active");
				            $(navObj).eq(j).css({
				                "background":"#f84343",
				                "color": "#fff"
				            });
				 		}
				 	}
				}
			}
		}
    });
});
$(window).resize(function(){
    style();
    $(".por-content .down-main .down-img img").css( "height","100%");
});
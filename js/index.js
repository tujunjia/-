$(function () {
  
  

  var D,H,M,s;
  function time(){
    var oS = document.getElementById('countd');
    var oTarget = new Date();
    oTarget.setFullYear(2019,7,16);
    oTarget.setHours(24,0,0,0);
    var iTarget = oTarget.getTime();
    var oNow = new Date();
    var iNow = oNow.getTime();
    s = parseInt((iTarget-iNow)/1000);

    D = parseInt(s/86400);
    s%=86400;
    H=parseInt(s/3600);
    s%=3600;
    M=parseInt(s/60);
    s%=60;

    if(D>=3){
      oS.innerHTML = '活动未开始';
    }else if(D<=0&&H<=0&&M<=0&&s<=0){
      clearInterval(timer);
      oS.innerHTML = '活动已结束';
    }else{
      oS.innerHTML=D + '天'+ H + '时' + M + '分' + s + '秒';
    }
  }
  time();
  var timer = setInterval(time,1000);
  
  $('.ol_first').on('click',function(){
    $(this).find('.ol_icon').toggleClass('ol_icon_tog');
    var ol_cons = $(this).next();
    if(ol_cons.is(':hidden')){
      ol_cons.slideDown('fast');
    }else{
      ol_cons.slideUp('fast');
    };
  })
})

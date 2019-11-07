$(function(){
  $("#register_close").on("click",function(){
    $(".register_mask").hide(100);
  })


  $('#uc_btn').find('.uc_mn_ra').on('click',function(){
    $(this).toggleClass('uc_mn_raact');
    var checkdd = $('#uc_btn').find("input[name='uc_radio']").attr("checked")
    if(checkdd){
      $('#uc_btn').find("input[name='uc_radio']").attr("checked",false);
    }else{
      $('#uc_btn').find("input[name='uc_radio']").attr("checked",true);
    }
  })

  $('#cptabs').next().find('.ctcItem').eq(0).show();
  $('#cptabs').find('.cp_t_item').each(function(){
    $(this).on('click',function(){
      $(this).addClass('acttt').siblings().removeClass('acttt');
      var index = $(this).index();
      $('#cptabs').next().find('.ctcItem').eq(index).show().siblings().hide();
    })
  });
  tabss('#conpon1');
  tabss('#conpon2');
  function tabss(id){
    $(id).find('.uc_btn').each(function(){
      $(this).on('click',function(){
        var index = ($(this).index()+1)/2;
        var ucbChild = $(this).find('.uc_mn_ra');
        var ucbChilds = $(this).siblings().find('.uc_mn_ra');
        var ucbPrev = $(this).siblings("input[name='cp_radio']");
        ucbChild.addClass('uc_mn_raact');
        ucbPrev.eq(index-1).attr("checked",true).siblings().attr("checked",false);
        ucbChilds.removeClass('uc_mn_raact');
      })
    });
  }


  // var CH = window.screen.height;
  // $('.pay_box').css('height',CH+'px');
  $('#pay').on('touchstart ',function(){
    var CH = window.screen.height;
    $('.pay_box').css('height',CH+'px');
    $('.pay_box').css({
      display:'flex'
    });
  })
  $('.pay_mask').on('click',function(){
    $('.pay_box').hide();
    $('#sty_list').css({
      display:'flex'
    });
    $('#bank_list').hide();
  })
  tabss('#sty_list');
  $('#seeOther').on('click',function(){
    $(this).hide();
    $('#sty_list').hide();
    $('#bank_list').css({
      display:'flex'
    });
  })
})
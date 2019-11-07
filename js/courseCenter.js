$(function(){

  var CH = document.body.scrollHeight;
  console.log(CH);
  $('.menu_cons').css('height',CH+'px');

  $('.menu_cons').hide();

  $('#menu .mme_item').each(function(){
    $(this).on('click',function(){
      var index = $(this).index();
      $(this).css({
        color:'#ed4248'
      }).siblings().css({
        color:'#333'
      });

      $(this).find('img')
      .attr({
        src:'images/kcdgxl.png'
      })
      .css({
        transform:'rotate(180deg)'
      })

      $(this).siblings().find('img')
      .attr({
        src:'images/kczxxl.png'
      }).css({
        transform:'rotate(0deg)'
      })

      if($('.mC_item').eq(index).is(':hidden')){
        $('.menu_cons').show();
        $(this).css({
          color:'#ed4248'
        });
      }else{
        $(this).css({
          color:'#333'
        });
        $(this).find('img').attr({
          src:'images/kczxxl.png'
        }).css({
          transform:'rotate(0deg)'
        })
        $('.menu_cons').hide();
      }
      $('.mC_item').eq(index).show().siblings().hide();
    });
  });



  $('.mcib_child').hide();
  $('#zys').find('.mci_btn').each(function(){
    $(this).on('click',function(){
      
      var idx = $(this).index();
      $(this).css({
        color:'#fff',
        border:'none',
        background:'#ed4248'
      }).siblings().css({
        color:'#333',
        background:'transparent'
      });
      $('.mcib_child').show();
      $('.mcib_child').find('.mcidcItem').eq(idx).show().siblings().hide();
      if($('.mcib_child').find('.mcidcItem').eq(idx).html()==''){
        $('.mcib_child').hide();
      }else{
        $('.mcib_child').show();
      }
    })
  })

  $('.mc_mask').on('click',function(){
    $('.mme_item').css({
      color:'#333'
    });
    $('.mme_item').find('img').attr({
      src:'images/kczxxl.png'
    }).css({
      transform:'rotate(0deg)'
    })
    $('.menu_cons').hide();
  })
})
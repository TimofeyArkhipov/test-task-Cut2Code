$(document).ready(() => {
  const toggleBtn = '.main__btn-toggle';
  
  $('.main__info-block.yearly').addClass('hide');
  $(toggleBtn).first().addClass('active');

  $(toggleBtn).click(e => {
    const _this = e.currentTarget;
    const btnType = $(_this).data("btn");
    const btnIndex = $(toggleBtn).index(_this);
    const btnsLength = $(toggleBtn).length;

    $(toggleBtn).removeClass('active');
    $(_this).addClass('active');
    
    $('.toggle-btn').css({
      'left': `${(100 * btnIndex) / btnsLength}%`
    });

    $('.main__info-block').addClass('hide');
    $(`.${btnType}`).removeClass('hide');
    $(`.${btnType}`).addClass('show');
  });
});
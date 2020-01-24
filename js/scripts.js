const bodyClass = document.querySelector('body');
const subMenuClass = document.getElementsByClassName('hasChildmenu')
function openMenu(){
  bodyClass.classList.add('st-openMenu');
}
function closeMenu(){
  bodyClass.classList.remove('st-openMenu');
  subMenuClass.classList.remove('m-open');
}
$(document).ready(function() {
  $('.hasChildmenu .c-link').on('click',function(){
    $(this).parent('.hasChildmenu').addClass('m-open');
  });

  $('.hasChildmenu .subMenu_back').on('click',function(){
    $(this).parents('.hasChildmenu').removeClass('m-open');
  });

});

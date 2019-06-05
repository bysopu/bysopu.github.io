// console.log("load");

// 햄버거 메뉴바
var $burgerDeluxe = document.querySelector(".burger_deluxe")
$burgerDeluxe.addEventListener("click", function(e){
    $(this).toggleClass('open');
    $('.overlay').toggleClass('open');
})


function PlaySound1(vinyl) {
    var thissound1=document.getElementById(vinyl);
    thissound1.play();
}
function PauseSound1(vinyl) {
    var thissound1=document.getElementById(vinyl);
    thissound1.pause();
}
function PlaySound2(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.play();
}
function PauseSound2(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.pause();
}
function PlaySound3(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.play();
}
function PauseSound3(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.pause();
}
function PlaySound4(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.play();
}
function PauseSound4(vinyl) {
  var thissound2=document.getElementById(vinyl);
  thissound2.pause();
}

var $tabMenu = document.querySelector("#tab-menu");
    var $tabMenuEl = $tabMenu.querySelectorAll('a'); //list. [... ... ... ...];
    var $tabContent = document.getElementsByClassName('tab-content'); //list [... ... ... ...];
    // console.log($tabMenu, $tabMenuEl);
    // console.log($tabContent);
    for(var i = 0; i < $tabMenuEl.length; i++){
      tabMenuClick(i);
    }
    function tabMenuClick(index){
      //i 의 순서를 체크할 수 있게 index 의 전달인자로 할당.
      $tabMenuEl[index].addEventListener('click', function(e) {
        e.preventDefault();
        for(var i = 0; i < $tabMenuEl.length; i++){
          //모든 요소에서 .selected 를 삭제.
          $tabMenuEl[i].classList.remove('selected');
          $tabContent[i].classList.remove('selected');
          if(i === index){
            //for 반복문이 실행될 때, 자신의 순서와 i 의 일치 여부를 체크.
            //같은 경우에 .selected 를 요소에 추가.
            $tabMenuEl[i].classList.add('selected');
            $tabContent[i].classList.add('selected');
          }
        }
      });
    }
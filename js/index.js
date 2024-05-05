
function scrollHandler(event) {
  var page2 = document.querySelector(".text2");
  var page3 = document.querySelector(".text3");
  var delta = event.deltaY || event.detail || event.wheelDelta;
  
  if (delta < 0) {
    window.scrollBy({top: -window.innerHeight*12/11, behavior: 'smooth' });
    
  } else if (delta > 0) {
    window.scrollBy({ top:  window.innerHeight*12/11, behavior: 'smooth' });
  }
  setTimeout(function () {
    window.addEventListener("wheel", scrollHandler);
  }, 1000);
  window.removeEventListener("wheel", scrollHandler);

}

// 添加滚轮事件监听器
window.addEventListener("wheel", scrollHandler);
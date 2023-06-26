//*語言列表
// 获取菜单按钮和菜单元素
const menuButton = document.querySelector('.language-menu-button');
const menu = document.querySelector('.language-menu');
const menuClose = document.querySelector('.close-menu');
// 添加菜单按钮的点击事件监听器
menuButton.addEventListener('click', function() {
  menu.classList.add('open');
});

// 添加菜单元素的点击事件监听器
menu.addEventListener('click', function(event) {
  // 如果点击事件的目标是菜单元素或其中的选项，则不关闭菜单
  if (event.target.classList.contains('language-menu') && (event.target.tagName === 'LI' && event.target.parentNode.classList.contains('language-menu'))) {
    return;
  }
  // 否则关闭菜单
  menu.classList.remove('open');
});

// 添加文档的点击事件监听器
document.addEventListener('click', function(event) {
  if (menuClose.contains(event.target)) {
    // 如果点击事件的目标是关闭按钮，则关闭菜单
    menu.classList.remove('open');
  } else if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    // 如果点击事件的目标不是菜单按钮和菜单元素，则关闭菜单
    menu.classList.remove('open');
  }
});

//*頁面切換
// 初始切換到頁面1
window.onload = function() {
  switchPage('page5');  // TODO:優先顯示頁面
}
// 頁面切換函數
function switchPage(pageId) {
  // 隱藏所有頁面
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  } 
  
  // 顯示選中的頁面
  var selectedPage = document.getElementById(pageId);
  selectedPage.style.display = 'block';
}

// 監聽選項點擊事件
document.getElementById('option1').addEventListener('click', function() {
  switchPage('page1'); // 切換到頁面1
});

document.getElementById('option2').addEventListener('click', function() {
  switchPage('page2'); // 切換到頁面2
});

document.getElementById('option3').addEventListener('click', function() {
  switchPage('page3'); // 切換到頁面3
});

document.getElementById('option4').addEventListener('click', function() {
  switchPage('page4'); // 切換到頁面4
});

document.getElementById('option5').addEventListener('click', function() {
  switchPage('page5'); // 切換到頁面5
});
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
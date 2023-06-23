const tds = document.querySelectorAll('td');
const body = document.querySelector('body');
const defaultImage = 'image/mhwi.jpg';
const bgImages = [
  'image/a1.png',
  'image/a2.png',
  'image/a3.png'
];

// 预加载默认背景图片和划过时的背景图片
const images = [defaultImage, ...bgImages].map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

// 给每个表格单元格添加鼠标移入事件监听器
tds.forEach((td, index) => {
  td.addEventListener('mouseover', () => {
    body.style.backgroundImage = `url(${bgImages[index]})`;  // 替换整个网页的背景图片
  });
});

// 给每个表格单元格添加鼠标移出事件监听器
tds.forEach(() => {
  td.addEventListener('mouseout', () => {
    body.style.backgroundImage = `url(${defaultImage})`;  // 恢复默认的背景图片
  });
});
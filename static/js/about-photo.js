//头部背景图随机显示
(function() {
  const data = [
    { text: '拍摄于太原植物园', image: 'https://img.010316.xyz/usr/hugo/IMG_20201107_220715.jpg' },
    { text: '拍摄于晋阳古城', image: 'https://img.010316.xyz//usr/hugo/IMG_20211002_172824.jpg' },
    { text: '拍摄于北京颐和园', image: 'https://img.010316.xyz///usr/Obsidian/20241119121517.png' }
    { text: '拍摄于雁门关', image: 'https://img.010316.xyz///usr/Obsidian/photo_2024-06-17_15-13-26.jpg' }
  ];

  const random = data[Math.floor(Math.random() * data.length)];
  const img = document.querySelector('.about-img img');
  const intro = document.querySelector('.about-img-intro');

  if (img && intro) {
    img.src = random.image;
    intro.textContent = random.text;
  }
})();
// none是隱藏，block是顯示
document.getElementById('hopeless').style.display = 'none';
document.getElementById('funny').style.display = 'none';
document.getElementById('address').style.display = 'none';

setTimeout(() => {
    // 等待5秒後隱藏 loading 圖示，顯示提示訊息，跳出圖片
    document.getElementById('message').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    document.getElementById('hopeless').style.display = 'block';
    document.getElementById('funny').style.display = 'block';
    document.getElementById('address').style.display = 'block';

}, 5000);

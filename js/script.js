'use stridt';
//スマートフォン及びタブレットでのナビゲーション
//------------------------------------------------------------------------------------------------
const button = document.getElementById('button').addEventListener('click', function(){
 let show = document.getElementById('open');
  let close = document.getElementById('close');
  let menu = document.getElementById('menu');
  let mask = document.getElementById('mask');
  show.addEventListener('click', function(){
    menu.className = 'open';
    close.className = '';
    show.className = 'hidden';
    mask.className = '';
  });
  close.addEventListener('click', function(){
    menu.className = 'close';
    close.className = 'hidden';
    show.className = '';
    mask.className = 'hidden';
  });
  });


//SPA風の表示
  //要素の取得
  const menuItems = document.querySelectorAll('#menu li a');//#menuの中のli要素の中のa要素を取得
  const contents = document.querySelectorAll('.content');//contentクラスを取得

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e =>{
      e.preventDefault();
      menuItems.forEach( item => {
        item.classList.remove('active');//リストメニューの全ての要素から一旦activeクラスを外す。
      });
      clickedItem.classList.add('active');//現在アクティブな要素にactiveクラスを付与する。

      contents.forEach( contents => {
        contents.classList.remove('active');//全てのcontentから一旦activeクラスを外す。
      });
      //clickされたリンクのdata-id属性を取得して、そこに紐づいた部分にactiveクラスを付与。
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });

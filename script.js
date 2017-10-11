// const doc = document
// const img = new Image()
// img.src = './gifs/820.gif'
// doc.querySelector('.loading').appendChild(img)

// document.addEventListener('readystatechange', function(e) {
//   if (document.readyState === 'complete') {
//     document.querySelector('.loading').classList.add('close')
//   }
// })

// setTimeout(function() {
//   doc.querySelector(".loading").classList.add("close");
// }, 2000);

// document.onreadystatechange = function() {
//   if (document.readyState === 'complete') {
//     doc.querySelector('.loading').classList.add('close')
//   }
// }

const Imgs = [
  'https://images.unsplash.com/photo-1428447207228-b396f310848b?dpr=1&auto=compress,format&fit=crop&w=1950&h=&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1493847242172-d46053a1f671?dpr=1&auto=compress,format&fit=crop&w=1950&h=&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1501371703172-850ab6b6e282?dpr=1&auto=compress,format&fit=crop&w=1307&h=&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/photo-1491466424936-e304919aada7?dpr=1&auto=compress,format&fit=crop&w=1949&h=&q=80&cs=tinysrgb&crop=',
  'https://images.unsplash.com/uploads/1412259799414a71445bd/f7a44cdc?dpr=1&auto=compress,format&fit=crop&w=2388&h=&q=80&cs=tinysrgb&crop='
]

let w = 0

Imgs.forEach(function (imgSrc) {
  const img = new Image()
  img.onload = function () {
    document.querySelector('.loading').style.width = w + '%'
    w += (100 / Imgs.length)
  }
  img.src = imgSrc
})






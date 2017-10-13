const loading = document.createElement('div')
loading.classList.add('loading')
loading.innerHTML = '<span></span><span></span><span></span><span></span>'
document.body.appendChild(loading)

const imgs = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507917636983&di=1ed54020d8334ba69e3ec1ba7927974d&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F711%2F0S113105123%2F130S1105123-8.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507917690142&di=3dd71319a646f373d1d5a8f2a63adf18&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F062Q5092344%2F15062P92344-3.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507917700335&di=70655e1a58803950f2fce64278024380&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201704%2F20170621002.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507917721357&di=6d1e8d3bc73db0fee58f5cf10fc749eb&imgtype=0&src=http%3A%2F%2Fwww.005.tv%2Fuploads%2Fallimg%2F161118%2F11325435F-4.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507917271057&di=42ca4ea4c3c2c8e7fc7ad5f58d3dfbee&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201609%2F20160906010.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507918032436&di=1ca43c996f03a5138de6f225e880c8e4&imgtype=0&src=http%3A%2F%2Fimgstore.cdn.sogou.com%2Fapp%2Fa%2F100540002%2F617438.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507918052896&di=e0c68da4a0948acc67706e8a9320cc24&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1011%2F03051G53P2%2F1F305153P2-3.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507918087166&di=19841565331442e31edd47e9cdaf7295&imgtype=0&src=http%3A%2F%2Fwww.danji8.com%2Fuploadpic%2F201312%2F05%2F2013120510305063781386210650.jpg'
]

let count = 0
imgs.forEach(function (imgsrc) {
  const img = new Image()
  img.onload = function () {
    count++
    if (count >= imgs.length) {
      document.querySelector('.loading').classList.add('close')
    }
  }
  img.src = imgsrc
  document.body.appendChild(img)
})


// document.addEventListener('readystatechange', function () {
//   if (document.readyState === 'complete') {
//   }
// })
/**
 * 随机获取颜色
 */
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

/**
 * 一键复制内容
 */
function onKeyCopy(e){
  wx.setClipboardData({
    data: e
  })
};

/**
 * 接口
 */
module.exports = {
  onKeyCopy : onKeyCopy,
  getRandomColor : getRandomColor
}

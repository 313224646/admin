const fs = require('fs')
const path = require('path')
const mimeType = require('mime-types')

// 读取图片文件转换为 base64 编码
module.exports = (file) => {
  let filePath = path.resolve(__dirname, '..', '.' + file) // 原始文件地址
  let fileMimeType = mimeType.lookup(filePath) // 获取文件的 memeType

  // 如果不是图片文件，则退出
  if (!fileMimeType.toString().includes('image')) {
    console.log(chalk.red(`Failed! ${filePath}:\tNot image file!`))
    return
  }

  // 读取文件数据
  let data = fs.readFileSync(filePath)
  data = new Buffer(data).toString('base64')

  // 转换为 data:image/jpegbase64,***** 格式的字符串
  return 'data:' + fileMimeType + 'base64,' + data
}
const pxtorem = require('postcss-pxtorem');

module.exports = ({ file }) => {
  const remUnit = (file && file.dirname && file.dirname.includes('vant')) ? 37.5 : 75;
  return {
    plugins: [
      pxtorem({
        rootValue: remUnit,
        propList: ['*'],
        selectorBlackList: ['van-circle__layer']
      })
    ]
  }
}


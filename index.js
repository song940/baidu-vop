const fs      = require('fs');
const request = require('superagent');

function BaiduVOP(apiKey){
  if( !(this instanceof BaiduVOP) ){
    return new BaiduVOP(apiKey);
  }
  this.apiKey = apiKey;
}

BaiduVOP.prototype.asr = function(file, callback) {
  request
  .post('http://apis.baidu.com/apistore/vop/baiduvopjson')
  .set('apikey', this.apiKey)
  .type('urlencoded')
  .send({
    format : 'pcm',
    rate   : 8000 ,
    channel: 1    ,
    lan    : 'zh' ,
    audioBase64: fs.readFileSync(file).toString('base64')
  })
  .end(function(err, res){
    callback(err, JSON.parse(res.text));
  });
};

module.exports = BaiduVOP;

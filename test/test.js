var vop = require('../')('5df39885c03b6638cfe90e3210bcc6d6');

vop.asr('/Users/Lsong/Desktop/a.pcm', function(err, res){
  console.log(res);
});

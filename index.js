

function Buffer2(buf){
  this.data = [].concat.apply([], [].map.call(buf, Buffer2.byte2bit));
}

Buffer2.byte2bit =  function(data) {
  var bits = [ 0,0,0,0, 0,0,0,0 ];
  for (var i = 7; i >= 0; i--)
    bits[7-i] = data & Math.pow(2, i) ? 1 : 0;
  return bits;
}

Buffer2.prototype.read = function () {
  
};

Buffer2.prototype.write = function(){
  
};


module.exports = Buffer2;

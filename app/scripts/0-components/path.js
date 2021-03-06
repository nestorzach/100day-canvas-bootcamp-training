// =============


function forEach(array, fn){
    for(var i = 0; i< array.length; i++){
        fn(array[i]);
    }
}

// =============

var fs = require('fs');
var thClonedArr = [];

var th = "M100,75.603c0,50.12-18.593,77.779-51.246,77.779c-28.794,0-48.302-26.985-48.754-75.739C0,28.216,21.316,1,51.246,1C82.312,1,100,28.668,100,75.603z M19.959,77.874c0,38.322,11.789,60.09,29.93,60.09c20.412,0,30.161-23.809,30.161-61.447c0-36.281-9.296-60.1-29.93-60.1C32.653,16.417,19.959,37.734,19.959,77.874z";

var thArr = th.split(/[A-Z]/);

forEach(thArr, function(val){
    thClonedArr.push(val);
});

// console.log(thClonedArr);
//

var outputArr = [];

outputArr.push([]);

forEach(thClonedArr, function(val){
    if(val.search(/[a-y]/) > 0){
        var count = 0;

        var textArr = val.split(/[a-y]/);
        var firstVal;

        forEach(textArr, function(val){
            val = val.replace(/-/g, ',-');

            if(count === 0){
                outputArr[outputArr.length - 1].push(val);
                var ptArr = val.split(/,/);
                firstArr = ptArr;
            }else{
                var ptArr = val.split(/,/);
                var hosei = ptArr.length % 2;
                var ptTemArr = [];

                for(var ii = hosei; ii < ptArr.length; ii+= 2){
                    var ptX = parseFloat(ptArr[ii + 0]) + parseFloat(firstArr[0]);
                    var ptY = parseFloat(ptArr[ii + 1]) + parseFloat(firstArr[1]);

                    ptTemArr.push(ptX);
                    ptTemArr.push(ptY);
                }

                firstArr = [ptArr[ptArr.length - 2], ptArr[ptArr.length - 1]];

                var pointText = "";
                var pointCnt = 0;

                forEach( ptTemArr, function(val){

                    if(pointCnt == 0){
                        pointText += String(val); 
                    }else{
                        pointText += ','  + String(val);
                    }
                    
                    pointCnt++;
                });

                outputArr[outputArr.length - 1].push(pointText);
            }

            
            count++; 
            
        });
    }else{
        if(val.search(/z/) > 0){
            var text = val.split(/z/);

            outputArr[outputArr.length - 1].push(text[0]);
            outputArr.push([]);
        }else{
            //console.log(val);
            if(val.length > 0){
                outputArr[outputArr.length - 1].push(val);
            }
        }
    }
});

console.log(outputArr);

var '[['
for(var ii = 0; ii < outputArr.length; ii++){
    var pathArr = outputArr[ii];
    if(pathArr.length > 0){
        for(var j = 0; j  
    }
}


fs.open('./data.js', 'w', function(err, fd) {
      if(err) throw err;
      var buf = new Buffer(thArr);
      fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
          if(err) throw err;
          console.log(err, written, buffer);
          fs.close(fd, function() {
              console.log('Done');
          });
      });
});



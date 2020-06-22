
var avg = 0;
var total =0;
var arr = []
while(arr.length < 8){
    var r = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
    total += r;
}
avg = total / arr.length;
 
console.log(arr);
max = Math.max(...arr);
min = Math.min(...arr)
console.log('Maks '+max);
console.log('min '+min);
console.log('avg '+avg);




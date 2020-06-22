
var age = 21;
var json_data = '{"data":[' +
'{"id":"1","name":"udin","age":"12" },'+
'{"id":"2","name":"Reane","age":"51" },'+
'{"id":"3","name":"Budi","age":"34" },' +
'{"id":"4","name":"Agus","age":"16" },' +
'{"id":"5","name":"Sari","age":"19" },' +
'{"id":"6","name":"Ririn","age":"20" },' +
'{"id":"7","name":"Dessy","age":"23" }]}';

var obj = JSON.parse(json_data);

for (var i = 0; i < obj.data.length; i++) {
    var new_data = obj.data[i];
    if(new_data.age < age)
    {
        console.log(new_data.id,new_data.name, new_data.age);
    }
  
}
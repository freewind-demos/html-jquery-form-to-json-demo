const data = $('#myform').serializeArray();
console.log(data);
$('#log').html(JSON.stringify(data));

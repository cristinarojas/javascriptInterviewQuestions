// Promises
// We are going to make asinchronus call that have to wait to
// something to happen and then when can back you execute a callback function.

var p1 = new Promise(function(resolved, rejectct) {
  resolved($.ajax('a.json');)
});

p1.then(function(r) {
  return new Promise()
}).then(function(result){
  $("#div1").html(result);
})

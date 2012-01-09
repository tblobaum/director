
createTest('adhoc routing should not break', {

}, function() {

  shared.fired = [];
  
  this.router.on('/a/:id', function(id) {
    shared.fired.push(location.hash);
  });

  this.navigate('/a/test', function() {
    deepEqual(shared.fired, ['#/a/test']);
    this.finish();
  });
  
});


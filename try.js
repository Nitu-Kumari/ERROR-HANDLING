function run() {
    try {
      var arr = new Array(1); 
    } catch (err) {
      console.log(err); 
    }
  
    console.log('But this time, my program stays alive!');
  }
  
  run();
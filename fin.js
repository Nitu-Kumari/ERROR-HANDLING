function run() {
    try {
      var arr = new Array(1); 
    } catch (err) {
      console.log(err); 
    } finally {
      return [];
    }
  
    console.log('My program returns before this because of finally!');
  }
  
  console.log(run()); 
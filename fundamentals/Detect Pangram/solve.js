function isPangram(string){
    //...
    let result = true;
    const chars = "abcdefghijklmnopqrstuvwxyz";
    
    
    for (let iter = 0; iter < chars.length; iter++ )
      {
        if (string.toLowerCase().indexOf(chars[iter]) === -1 )
          {
            return false
          }
      }
    
    return result;
  }
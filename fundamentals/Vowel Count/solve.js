function getCount(str) {
    var vowelsCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let iter = 0; iter < str.length; iter++)
      {
        if(vowels.includes(str[iter])) {
          vowelsCount++
        }
      }
    
    
    
    return vowelsCount;
  }
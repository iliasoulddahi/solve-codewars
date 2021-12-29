function duplicateCount(text){
    let count = 0;
    let indexYangSudahDiBaca = 0;
    let charYangSudahDuplikat = [];
    
    let str = text.toLowerCase() 
    for (let iter = 0; iter < str.length; iter++)
      {
        for (let jiter = 0; jiter < str.length + iter; jiter++){
          if ( charYangSudahDuplikat.includes(str[jiter]) || jiter === iter || indexYangSudahDiBaca === iter){
            continue;
          }
          else if (str[iter] === str[jiter])
          {
            count+=1
            indexYangSudahDiBaca = jiter;
            charYangSudahDuplikat.push(str[iter])
          }
        }
      }
    return count;
  }
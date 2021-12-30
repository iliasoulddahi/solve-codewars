function count (string) {  
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let result = {}; 
      string.split('').forEach((element)=> {
      alphabets.forEach((alphabet)=>{
        if (alphabet === element){
          if(!result.hasOwnProperty(element)){
            result[element] = 0 
          }
          result[element] ++
        }
        
      })
    })   
    return result;
  }
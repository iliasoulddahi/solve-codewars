// solution
function list(names){
    let output = '';
      for (let iter = 0; iter < names.length; iter++){
          output+= names[iter].name;
        if(names.length - 1 === iter){continue;}
          output+= names.length-2 === iter?" & ":", "
      }
    return output;
  }
  


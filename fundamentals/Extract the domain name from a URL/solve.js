function domainName(url){
    let preDeleted = url.toLowerCase().replace(/http:\/\/|https:\/\/|www./g , '' )  
    return preDeleted.replace(preDeleted.substring(preDeleted.indexOf(".")), '')
  }
import { forEach } from '@angular/router/src/utils/collection';

export let isEmpty = (obj) => {
  if(obj == ""){
    return true
  }
  if(Object.keys(obj).length === 0){
    return true
  }

  if(obj[Object.keys(obj)[0]] === ""){
    return true
  }
  return false ;
}

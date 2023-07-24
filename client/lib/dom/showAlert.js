import { addClass,removeClass } from "./css.js";
import { getNode } from "./getNode.js"



export function showAlert(node,text = '에러',timeout = 1000){

  if(typeof node === 'string'){
    node = getNode(node);
  }

  node.textContent = text
  addClass('.alert-error','is-active')
  setTimeout(() => {
    removeClass('.alert-error','is-active')
  },timeout)

}


// showAlert('.alert','너님 이름 가져와',2000)
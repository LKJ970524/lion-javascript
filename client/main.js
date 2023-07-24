
import { jujeobData } from './data/data.js';

import { shake,getNode,addClass,showAlert,getRandom, insertLast,removeClass,clearContents,isNumericString,toggleClass,copy,} from './lib/index.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');


function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error','이름을 입력해라 제발', 3000)

    shake.restart();
    
    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error','이름을 몰라? 제대로 적어라', 3000)
    
    shake.restart();


    return
  }


  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function handleCopy(){
  const text = resultArea.textContent;

  copy(text).then(()=>{
    showAlert('.alert-success','복사완료 썸타는사람한테 보여줘');
  })

  
}


submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click',handleCopy)
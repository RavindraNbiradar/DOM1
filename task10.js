// const ul =document.querySelector('.items');
// ul.remove();
//ul.lastElementChild.remove();
// ul.firstElementChild.textContent ='hello';
// ul.children[1].innerText ='ravi';
// ul.lastElementChild.innerHTML = '<h1>hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background ='red';
//  const btn = document.querySelector('.btn');
//  btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//    // console.log(e.target.className);
//    document.querySelector('#my-form').style.background ='#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.item').lastElementChild.innerHTML ='<h1>hello</h1>';
//  });
 const myForm = document.querySelector('#my-form');
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const msg = document.querySelector('.msg');
 const useerList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    

    if(nameInput.value === '' || emailInput.value === ''){
     // alert('please enter fields');
     msg.classList.add('error');
     msg.innerHTML='please enter all field';
     setTimeout(() => msg.remove(),3000)
    } 
    else {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

       useerList.appendChild(li);
       //clear fields
       nameInput.value =  '';
       emailInput.value = '';
    }
    
}




const send=document.querySelector('#send');
const reciev=document.getElementById('p');
const names=document.getElementById('name');
const email=document.getElementById('email');
const message=document.getElementById('message');
const empty=document.getElementById('no');

send.addEventListener('click',function(e){
  e.preventDefault()
  if( names.value==''|| email.value==''|| message.value=='') {
    reciev.innerText='';
   return no.innerText='Fill all the spaces!!';
  };
  var messages={
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    message:document.getElementById('message').value
  }
  
  emailjs.send('service_4zy7trl','template_cdzwk4h',messages)
    .then((e)=>{
console.log('success', e.status)
    })
   names.value='';
   email.value='';
   message.value='';
   empty.innerText='';
   reciev.innerText='message recieved!';
   
  })


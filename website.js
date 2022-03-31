const buttons=document.querySelectorAll('.turn')
const ans=document.querySelector('.test');
const send=document.querySelector('#send');
const reciev=document.getElementById('p');
const names=document.getElementById('name');
const email=document.getElementById('email');
const message=document.getElementById('message');
const empty=document.getElementById('no');

for(let button of  buttons){
  button.addEventListener('click',function(){
    ans.classList.toggle('rotate');
  }
  );
}
send.addEventListener('click',function(e){
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


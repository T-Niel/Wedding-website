function sendMail(event){
  event.preventDefault();
  const params = {
    message: document.getElementById('message').value
   
  }

  const serviceID = 'service_6kklqun';
  const templateID = 'template_h01guta'

  emailjs.send(serviceID,templateID,params)
  .then(
  res =>{
    document.getElementById('message').value = ''

    console.log(res);
    alert('your message sent successfully')
  }
)
.catch((err) => console.log(err));
}

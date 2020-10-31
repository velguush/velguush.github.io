let show = document.getElementById('show');
let formSection = document.getElementById('formSection');
let send = document.getElementById('send');



show.onclick = function(){
formSection.style.display='block'
show.style.display='none'
}
send.onclick = function(){
    let name=document.getElementById('name').value;
    let phoneNumber=document.getElementById('phoneNumber').value;
    let message=document.getElementById('message').value;
    console.log(name)
    console.log(phoneNumber)
    console.log(message)

let postInfo = new XMLHttpRequest();
postInfo.open('get', `https://api.telegram.org/bot1218757739:AAEHwqe22cJvTL-ND2mEJxCDq1MoHte8Ou8/sendMessage?
text= Name:${name} %0A
Phone number:${phoneNumber} %0A
Massage:${message}&chat_id=-413157520`, false) ;
postInfo.send();
}
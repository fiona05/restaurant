function surligne(champ, erreur){
    if(erreur)
    champ.style.backgroundColor = "#ff9f9f"
    else
    champ.style.backgroundColor = "#76c38f"
}


function verifFullName(champ){
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifSubject(champ){
    if(champ.value.length < 4 || champ.value.length > 20)
    {
       surligne(champ, true);
       return false;
    }
    else
    {
       surligne(champ, false);
       return true;
    }
 }

 function verifMessage(champ){
    if(champ.value.length < 10 /*|| champ.value.length > 20*/)
    {
       surligne(champ, true);
       return false;
    }
    else
    {
       surligne(champ, false);
       return true;
    }
 }

//----------------------------------------

var full_name = document.getElementById('full_name');
var eMail = document.getElementById('mail');
var subject = document.getElementById('subject');
var smallMessage = document.getElementById('message');

function verif() {
    // var full_name = document.getElementById('full_name');
    // var eMail = document.getElementById('mail');
    // var subject = document.getElementById('subject');
    // var smallMessage = document.getElementById('message');
    if (full_name.value.length < 2) {
        alert("Please indicate your full name");
        full_name.focus();
        return false;
    }

    if (eMail.value == "") {
        alert("Please indicate a valid Email.");
        eMail.focus();
        return false;
    }

    if (subject.value.length< 4) {
        alert("Please indicate the subject of your message. 4 characters min.");
        subject.focus();
        return false;
    }

    if (smallMessage.value.length < 10) {
        alert("Please explain correctly your request in the message section. 10 characters min.");
        smallMessage.focus();
        return false;
    }
}
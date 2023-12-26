function validateEmail(email) {
    var gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
  }
function validate(){
    const name = document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const emailsubject = document.getElementById('subject').value;
    const message=document.getElementById('message').value;
    if(name==""){
        $("#err").text("Enter your name");
        $("#err").css("color", "red");
        setTimeout(function() {
            $("#err").empty();
        }, 4000);
    }
    else if(email==""){
        $("#err").text("Enter your email");
        $("#err").css("color", "red");
        setTimeout(function() {
            $("#err").empty();
        }, 4000);
    }
    else if(emailsubject==""){
        $("#err").text("Enter your subject");
        $("#err").css("color", "red");
        setTimeout(function() {
            $("#err ").empty();
        }, 4000);
    }
    else if(message==""){
        $("#err").text("Enter your message");
        $("#err").css("color", "red");
        setTimeout(function() {
            $("#err").empty();
        }, 4000);
    }
    else if(!validateEmail(email)){
        $("#err").text("Enter valid email address");
        $("#err").css("color", "red");
        setTimeout(function() {
            $("#err").empty();
        }, 4000);
    }
    else{
        sendEmail();
    }
}

function sendEmail(){
    var params = {
        fullName:document.getElementById('name').value,
        sourceEmail:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        message:document.getElementById('message').value
    }
    const serviceId="service_o527c2v";
    const templateId="template_prd79z4";
    
    emailjs.send(serviceId,templateId,params)
    .then((res)=>{
        if(res.status ==200){
            $("#err").text("Email is sent successfully");
            $("#err").css("color", "green");
            setTimeout(function() {
                $("#err ").empty();
                document.getElementById('name').value="";
                document.getElementById('email').value="";
                document.getElementById('subject').value="";
                document.getElementById('message').value="";
            }, 4000);
        }
        else{
            $("#err").text("Error while sending email");
            $("#err").css("color", "red");
            setTimeout(function() {
                $("#err ").empty();
                document.getElementById('name').value="";
                document.getElementById('email').value="";
                document.getElementById('subject').value="";
                document.getElementById('message').value="";
            }, 4000);
        }
    });
}


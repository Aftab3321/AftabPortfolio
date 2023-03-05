

    document.getElementById("submit").addEventListener('click', function () {
        let name = document.getElementById("inputName").value;
        let email = document.getElementById("inputEmail1").value;
        let message = document.getElementById("inputMessage").value;
        if(name != "" && email != "" && message != "") {
            //let myPrompt = "Hello " + String(name) + " your email is: " + String(email) + " You said: " + String(message);
            //alert(myPrompt);
            let param = {
                from_name: name,
                email_id: email,
                message: message
            }
            emailjs.send("service_n1k1t4w","template_02csj71", param).then(function (res) {
                alert("Success" + res.status)
            })
        }
    })
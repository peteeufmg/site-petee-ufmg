function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Por favor, preencha seu nome.";
        document.querySelector('.status').classList.add('alert');
        document.querySelector('.status').classList.add('alert-warning');
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Por favor, preencha seu e-mail.";
        document.querySelector('.status').classList.add('alert');
        document.querySelector('.status').classList.add('alert-warning');
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Por favor, verifique o formato de seu e-mail.";
            document.querySelector('.status').classList.add('alert');
            document.querySelector('.status').classList.add('alert-warning');
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Por favor, preencha o assunto.";
        document.querySelector('.status').classList.add('alert');
        document.querySelector('.status').classList.add('alert-warning');
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Por favor, preencha a mensagem.";
        document.querySelector('.status').classList.add('alert');
        document.querySelector('.status').classList.add('alert-warning');
        return false;
    }
    document.querySelector('.status').innerHTML = "Enviando...";
    document.querySelector('.status').classList.add('alert');
    document.querySelector('.status').classList.remove('alert-warning');
    document.querySelector('.status').classList.add('alert-info');
    // document.getElementById('contact-form').submit();
    document.querySelector('.status').innerHTML = "Concluído.";
    document.querySelector('.status').classList.remove('alert-info');
    document.querySelector('.status').classList.add('alert-success');
  }

  function clearForm(){
    document.querySelector('.status').innerHTML = "";
    document.querySelector('.status').classList.remove('alert');
    document.querySelector('.status').classList.remove('alert-success');
    document.querySelector('.status').classList.remove('alert-warning');
    document.querySelector('.status').classList.remove('alert-info');
  }
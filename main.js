window.onload = function(){
    let form = document.querySelector('form');
    let soloLetras = /^[a-zA-Z\s]+$/; //
    //let validEmail = /^[\w\d]+@[\w\d]+\.[\w]{2,3}$/; // cualquier email
    let validEmail = /^[\w\d]+@gmail.com$/; // solo gmail

    let validRUT = /^[0-9]{7,8}-[kK0-9]{1}$/;

    let validPassword = /^[a-zA-Z0-9!#$%\.=]{8,32}$/;

    form.addEventListener('submit', (evento) => {
        evento.preventDefault(); // evitar el comportamiento del formulario (enviar los datos);

        let hasError = false; // variable para saber si tenermos errores;

        // target info
        let form = evento.target;
        console.log(form.id);

        //let nombre = document.querySelector('#name');
        //console.log(nombre.value);

        let { name, rut, email, password, enviar } = form;
        console.log(name.value);
        console.log(email.value);
        console.log(password.value);
 
        if(name.value === ''){
            name.classList.add('is-invalid');
            hasError = true; // indicamos si tenermos error;
        } else if (!soloLetras.test(name.value)) {
            name.classList.add('is-invalid');
            hasError = true;
        } else {
            name.classList.remove('is-invalid');
        }

        if(rut.value === ''){
            rut.classList.add('is-invalid');
            hasError = true;
        } else if (!validRUT.test(rut.value)) {
            rut.classList.add('is-invalid');
            hasError = true;
        } else {
            rut.classList.remove('is-invalid');
        }

        if(email.value === ''){
            email.classList.add('is-invalid');
            hasError = true;
        } else if (!validEmail.test(email.value)){
            email.classList.add('is-invalid');
            hasError = true;
        } else {
            email.classList.remove('is-invalid');
        }

        if(password.value === ''){
            password.classList.add('is-invalid');
            hasError = true;
        } else if (!validPassword.test(password.value)){
            password.classList.add('is-invalid');
            hasError = true;
        } else {
            password.classList.remove('is-invalid');
        }


        if(!hasError){
            form.submit();
        }


    });






}
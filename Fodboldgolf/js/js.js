const form = document.getElementById('form');
    const navn = document.getElementById('navn');
    const email = document.getElementById('email');
    const telefon = document.getElementById('telefon');
    const dato = document.getElementById('dato');

    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        const navnValue = navn.value.trim();
        const emailValue = email.value.trim();
        const telefonValue = telefon.value.trim();
        const datoValue = dato.value.trim();

        if (navnValue === '') {
            setErrorFor(navn, 'Navn må ikke være tomt');
        } else {
            setSuccessFor(navn);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Email må ikke være tomt');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Indtast en korrekt mail');
        } else {
            setSuccessFor(email);
        }

        if (telefonValue === '') {
            setErrorFor(telefon, 'Telefon nr. må ikke være tomt');
        } else {
            setSuccessFor(telefon);
        }

        if (datoValue === '') {
            setErrorFor(dato, 'Dato må ikke være tomt');
        } else {
            setSuccessFor(dato);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


const loadDOM = (page) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `../pages/${page}`, false)
    xhr.send();
    document.write(xhr.response)
}

// validation
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

//preventing form from going to site if user tries to send empty form
function handleFormSubmit(event){
    event.preventDefault()

    //checking the input from user in the input area and text area
    const userName = document.getElementById("name");
    const userSurname = document.getElementById("surname");
    const userEmail = document.getElementById("email");
    const userMessage = document.getElementById("message");

    const checkName = userName.value.trim() !== '';
    const checkSurname = userSurname.value.trim() !== '';
    const checkEmail = userEmail.value !== '' & userEmail.validity.valid;
    
    let checkMessage = false;
    if( userMessage.value.trim() !== ''){
        checkMessage = true
    } else{
        checkMessage = false
    }

    //getting the actually information the user put in
    const isFormValid = checkName && checkSurname && checkEmail && checkMessage;

    if(isFormValid){
        //grab data
        const formData = new formData(event.target)
        fetch('https://formspree.io/f/mdoqyydz', 
            {
            method: 'Post',
            body: formData,
            headers: {
                'Accept': 'application/json'
            } 
            }
        )
        .then(response => response.json())
        .then(data => {
            if(data.ok){
                alert('Email has been sent')
            }
        })

    }else{
        //display span
        if(checkName !== true){
            const nameSpan = document.getElementById("name-span")
            nameSpan.classList.remove('hidden')
        }

        if(checkSurname !== true){
            const surnameSpan = document.getElementById("surname-span") 
            surnameSpan.classList.remove('hidden')
        }

        if(checkEmail !== true){
            const emailSpan = document.getElementById("email-span")
            emailSpan.classList.remove('hidden') 
        }

        if(checkMessage !== true){
            const messageSpan = document.getElementById("message-span")
            messageSpan.classList.remove('hidden')
        }
    }
}
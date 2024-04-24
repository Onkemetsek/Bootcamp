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
        gnkg
    }else{
        alert()
    }
}
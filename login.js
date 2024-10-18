

// LOG IN  FEATURE TO REDIRECT TO OTHER WEBPAGES
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const correctUsername = "Touchsomegrass96";
    const correctPassword = "1two3four5";

    if (username === correctUsername && password === correctPassword) {
        // Redirect to another page
        window.location.href = "Loading.html"; 
    } else { // will alert you if wrong
        alert("YOU SHALL NOT PASS!!");
    }
}


//THE MODAL FUNCTION
function openModal() { //open modal
    document.getElementById("modal").style.display = "block";
}

function closeModal() { // close modal
    document.getElementById("modal").style.display = "none";
}


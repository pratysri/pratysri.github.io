function showhideEmail() {
    const email = document.getElementById("email");
    const btn = event.target;

    if (email.style.display === "none") {
        email.style.display = "inline";
        email.innerHTML = "pratysri@mail.uc.edu";
        btn.innerText = "Hide My Email";
    } else {
        email.style.display = "none";
        email.innerHTML = "";
        btn.innerText = "Show My Email";
    }
} 
function showhideEmail() {
  const email = document.getElementById("email");
  const btn = event.target;

  if (email.style.display === "none") {
    email.style.display = "inline";
    btn.innerText = "Hide My Email";
  } else {
    email.style.display = "none";
    btn.innerText = "Show My Email";
  }
}

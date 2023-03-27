const signUpFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#signUpUsername").value.trim();
  const password = document.querySelector("#signUpPassword").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/signUp", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signUpSubmit")
  .addEventListener("submit", signUpFormHandler);

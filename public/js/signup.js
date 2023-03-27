const sign-upFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#sign-upUsername").value.trim();
  const password = document.querySelector("#sign-upPassword").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/sign-up", {
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
  .querySelector(".sign-upSubmit")
  .addEventListener("submit", sign-upFormHandler);

function sendEmail() {
  let params = {
    name: document.getElementById("full_name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_ofw7nap";
  const tempId = "template_yl81r06";

  emailjs
    .send(serviceId, tempId, params)
    .then((res) => {
      document.getElementById("full_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Message send successfully");
    })
    .catch((err) => console.log(err));
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
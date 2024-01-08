const imgBox = document.getElementById("img-box");
const qrImg = document.getElementById("qrImage");
const qrInputText = document.getElementById("qrText");
const button = document.querySelector("button");

function generateCode() {
  if (qrInputText.value.length > 0) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputText.value}`;
    imgBox.classList.add("show-img");
  } else {
    // alert("Enter characters to generate QR Code 🥺")
    setTimeout(() => {
      alert("Enter characters to generate QR Code 🥺");
    }, 900);
    qrInputText.classList.add("error");

    setTimeout(() => {
      qrInputText.classList.remove("error");
    }, 900);
  }
}

button.addEventListener("click", generateCode);

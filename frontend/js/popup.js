function showToast(message, type = "success") {
  const toastEl = document.getElementById("toastMsg");
  const toastText = document.getElementById("toastText");

  toastText.innerText = message;

  // Change color
  toastEl.className = `toast align-items-center text-bg-${type} border-0`;

  const toast = new bootstrap.Toast(toastEl, {
    delay: 8000,   // ⏱️ 3 seconds (you can increase)
    autohide: true
  });
  

  toast.show();
}
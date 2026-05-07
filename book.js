// Initialize modal
const messageModal = new bootstrap.Modal(document.getElementById('messageModal'));

document.getElementById("cake-booking-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const booking = {
    name: document.getElementById("name").value,
    contact: document.getElementById("contact").value,
    cakeFlavor: document.getElementById("cake-flavor").value,
    cakeSize: document.getElementById("cake-size").value,
    deliveryDate: document.getElementById("delivery-date").value,
    address: document.getElementById("address").value,
    message: document.getElementById("message").value
  };

  const existingBookings = JSON.parse(localStorage.getItem("cakeBookings")) || [];
  existingBookings.push(booking);
  localStorage.setItem("cakeBookings", JSON.stringify(existingBookings));

  // Show success message in modal
  document.getElementById('modalMessage').textContent = "🎂 Your order has been confirmed successfully!";
  messageModal.show();

  document.getElementById("cake-booking-form").reset();
});

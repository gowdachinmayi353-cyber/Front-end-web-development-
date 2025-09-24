// --- Filtering Function ---
function filterProducts(category) {
  let products = document.querySelectorAll('.product');
  let buttons = document.querySelectorAll('.filters button');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  products.forEach(product => {
    if (category === 'all' || product.classList.contains(category)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// --- Modal Functions ---
function openModal(product) {
  let modal = document.getElementById('productModal');
  document.getElementById('modalImg').src = product.querySelector('img').src;
  document.getElementById('modalTitle').textContent = product.querySelector('h3').textContent;
  document.getElementById('modalPrice').textContent = product.querySelector('p').textContent;
  modal.style.display = 'flex';
}
function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}
window.onclick = function(event) {
  let modal = document.getElementById('productModal');
  if (event.target == modal) {
    closeModal();
  }
}

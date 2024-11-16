// updating the price value below total 
function updatePrice() {
  const oneUnitPrice = 10.0;
  const twoUnitPrice = 18.0;
  const threeUnitPrice = 24.0;

  // Get the selected radio button
  const selectedUnit = document.querySelector('input[name="unit"]:checked');
  let totalPrice = 0;

  if (selectedUnit) {
    const unitValue = parseInt(selectedUnit.value);

    if (unitValue === 1) {
      totalPrice = oneUnitPrice;
    } else if (unitValue === 2) {
      totalPrice = twoUnitPrice;
    } else if (unitValue === 3) {
      totalPrice = threeUnitPrice;
    }
  }

  document.getElementById("total-price").innerText = `$${totalPrice.toFixed(2)} USD`;
}

function addToCart() {
  alert("Item added to cart!");
}


//   for selecting the option using radio button
function toggleAccordion(detailsId, radioId) {
  // Hiding all accordion details and remove "selected" class from all options
  const allDetails = document.querySelectorAll('.accordion-details');
  const allOptions = document.querySelectorAll('.unit-option');
  allDetails.forEach(detail => detail.style.display = 'none');
  allOptions.forEach(option => option.classList.remove('selected'));

  // Showing the selected accordion details and add "selected" class to the option
  document.getElementById(detailsId).style.display = 'block';
  document.getElementById(radioId).parentElement.classList.add('selected');

  // Set the corresponding radio button to checked
  document.getElementById(radioId).checked = true;
}

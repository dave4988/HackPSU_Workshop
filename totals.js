function calculateTotalCost() {
  let total = 0;
  total += parseFloat(document.getElementById('food_1').value);
  total += parseFloat(document.getElementById('food_2').value);
  total += parseFloat(document.getElementById('food_3').value);
  document.getElementById('total-field').value = total;
}

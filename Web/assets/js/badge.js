  let cartCount = 0;

  function addToCart() {
    cartCount++;
    document.getElementById('cartBadge').innerText = cartCount;
  }
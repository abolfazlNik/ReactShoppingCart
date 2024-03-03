async function getProducts() {
  const response = await fetch(`${import.meta.env.VITE_URL}/products`);
  const data = await response.json();
  return data;
}

async function product(id) {
  const response = await fetch(`${import.meta.env.VITE_URL}/products/${id}`);
  const data = await response.json();
  return data;
}

export { getProducts, product };

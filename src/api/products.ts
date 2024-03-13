const getTodos = async ({ pageParam }: { pageParam: number }) => {
  const response = await fetch(
    `${import.meta.env.VITE_URL_TODOS}/todos?_page=${pageParam}`
  );
  return response.json();
};

const getProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_URL_PRODUCTS}/products`);
  return response.json();
};

async function product(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_URL_PRODUCTS}/products/${id}`
  );
  const data = await response.json();
  return data;
}

export { getProducts, product, getTodos };

import { config } from "../config";

const products = {
  getProducts: async () => {
    const res = await fetch(`${config.url}/products`);
    return await res.json();
  },
  getProductsCategories: async () => {
    const res = await fetch(`${config.url}/products/categories`);
    return await res.json();
  },
  getSpecificCategory: async (categoryName: string) => {
    const res = await fetch(`${config.url}/products/category/${categoryName}`);
    return await res.json();
  },
};

export default products;

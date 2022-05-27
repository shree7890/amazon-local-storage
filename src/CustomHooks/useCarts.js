import { useEffect, useState } from "react";
import { getStoredCart } from "../Fakedb/Fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const saveProduct = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          saveProduct.push(addedProduct);
        }
      }
      setCart(saveProduct);
    }
  }, [products]);
  return [cart, setCart];
};

export default useCart;

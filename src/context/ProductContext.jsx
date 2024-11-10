/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//create context
export const ProductContext = createContext(null);
const ProductContextProvider = ({ children }) => {
  const [cardProducts, setCardProducts] = useState([]);

  //product handle
  const addProduct = (product) => {
    setCardProducts([...cardProducts, product]);
  };

  //remove product
  const removeProduct = (id) => {
    const filterProduct = cardProducts.filter((product) => product.id !== id);
    setCardProducts(filterProduct);
  };
  const productValue = { cardProducts, addProduct, removeProduct };
  return (
    <ProductContext.Provider value={productValue}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;

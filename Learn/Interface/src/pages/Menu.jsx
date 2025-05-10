import { useState } from "react";
import Header from "../components/menu/Header";
import Detail from "../components/menu/Detail";
import Footer from "../components/menu/Footer";
import axiosHandler from "../components/config/axios"; // Import axiosHandler

const App = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddToCart = async (item) => {
    try {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      let updatedProducts;

      if (existingItem) {
        updatedProducts = cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + (item.quantity || 1),
              }
            : cartItem
        );
      } else {
        updatedProducts = [
          ...cart,
          {
            id: item.id,
            name: item.name,
            image: item.image,
            quantity: item.quantity || 1,
          },
        ];
      }

      const productsForAPI = updatedProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      }));

      if (productsForAPI.length === 0) {
        setCart([]);
        return;
      }

      const response = await axiosHandler.post("/carts/add", {
        userId: 1,
        products: productsForAPI,
      });

      if (response.data.products) {
        setCart(
          response.data.products.map((product) => ({
            ...product,
            name:
              updatedProducts.find((p) => p.id === product.id)?.name ||
              item.name,
            image:
              updatedProducts.find((p) => p.id === product.id)?.image ||
              item.image,
          }))
        );
      }
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const updateCartQuantity = async (id, newQuantity) => {
    try {
      const updatedProducts = cart
        .map((item) => ({
          id: item.id,
          quantity: item.id === id ? newQuantity : item.quantity,
          name: item.name,
          image: item.image,
        }))
        .filter((item) => item.quantity > 0);

      if (updatedProducts.length === 0) {
        setCart([]);
        return;
      }

      const productsForAPI = updatedProducts.map((p) => ({
        id: p.id,
        quantity: p.quantity,
      }));

      const response = await axiosHandler.post("/carts/add", {
        userId: 1,
        products: productsForAPI,
      });

      if (response.data.products) {
        setCart(
          response.data.products.map((product) => ({
            ...product,
            name: updatedProducts.find((item) => item.id === product.id)?.name,
            image: updatedProducts.find((item) => item.id === product.id)
              ?.image,
          }))
        );
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật giỏ hàng:", error);
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Header
        onSearch={handleSearch}
        cartCount={cartCount}
        cart={cart}
        updateCartQuantity={updateCartQuantity}
        setCart={setCart}
      />
      <Detail search={search} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default App;

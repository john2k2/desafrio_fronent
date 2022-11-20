import MainHeader from "@/components/header/MainHeader";
import MainProducts from "./components/products/MainProducts";

import CartDetailProvider from "@/components/context/useCartDetail";

const App = () => {
  return (
    <CartDetailProvider>
      <MainHeader />
      <MainProducts />
    </CartDetailProvider>
  );
};

export default App;

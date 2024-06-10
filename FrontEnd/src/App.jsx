import Cart from "./components/Cart.jsx";
import Checkout from "./components/CheckOut.jsx";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./Store/CartContext.jsx";
import { ModalContextProvider } from "./Store/ModalContext.jsx";
 function App() {

  return(
    < ModalContextProvider>
      < CartContextProvider>
        < Header />
        < Meals />
        < Cart />
        < Checkout />
      </ CartContextProvider>
    </ModalContextProvider>
  );
 }

 export default App;

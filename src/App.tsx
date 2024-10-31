import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import { ProductProvider } from "./context/ProductContext"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage";

const App: React.FC = () => (
  <ProductProvider>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </ProductProvider>
);

export default App;


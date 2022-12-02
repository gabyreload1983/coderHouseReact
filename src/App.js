import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route
          exact
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route exact path="/register" element={<h1>Register</h1>} />
        <Route exact path="/login" element={<h1>Login</h1>} />
        <Route exact path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

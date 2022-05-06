import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Order from "./pages/order/Order";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import OrderList from "./pages/orderList/OrderList";
import { useState } from "react";

function App() {
  const [loginGuest, setLoginGuest] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {loginGuest ? (
            <Redirect to="/" />
          ) : (
            <Login setLoginGuest={setLoginGuest} />
          )}
        </Route>
        {loginGuest ? (
          <>
            <Topbar setLoginGuest={setLoginGuest} />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route exact path="/orders">
                <OrderList />
              </Route>
              <Route path="/orders/:orderId">
                <Order />
              </Route>
            </div>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;

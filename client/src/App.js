import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

//COMPONENT
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import TemplateProvider from "./templates/templateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailedView from "./components/productDetail/DetailedView";
import { Box } from "@material-ui/core";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: "55px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={DetailedView} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;

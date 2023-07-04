import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { Category, Recommended, Header, Footer, Product } from "./components";

function App() {

  return (
    <AmplifyProvider>
        <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Recommended />} />
              <Route
                path="/category/:name"
                element={<Category />}
              />
              <Route
                path="/product/:id"
                element={<Product />}
              />
            </Routes>
            <Footer></Footer>
        </Router>
    </AmplifyProvider>
  );
}

export default App;
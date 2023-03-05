import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home"
import About from "./components/routes/About"
import Contact from "./components/routes/Contact"
import Experience from "./components/routes/Experience"
import styles from "./css/App.module.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home></Home>
          }
        >
        </Route>
        <Route
          exact
          path='/about'
          element={
            <About></About>
          }
        >
        </Route>
        <Route
          exact
          path='/contact'
          element={
            <Contact></Contact>
          }
        >
        </Route>
        <Route
          exact
          path='/experience'
          element={
            <Experience></Experience>
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

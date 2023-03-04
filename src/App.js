import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Experience from "./routes/Experience"

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

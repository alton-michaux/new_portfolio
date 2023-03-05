import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home"
import About from "./components/routes/About"
import Contact from "./components/routes/Contact"
import Experience from "./components/routes/Experience"

function App() {
  const [currentPage, setCurrentPage] = useState('')

  const handlePage = (string) => {
    setCurrentPage(string)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home
              page={currentPage}
              setPage={handlePage}
            ></Home>
          }
        >
        </Route>
        <Route
          exact
          path='/about'
          element={
            <About
              page={currentPage}
              setPage={handlePage}
            ></About>
          }
        >
        </Route>
        <Route
          exact
          path='/contact'
          element={
            <Contact
              page={currentPage}
              setPage={handlePage}
            ></Contact>
          }
        >
        </Route>
        <Route
          exact
          path='/experience'
          element={
            <Experience
              page={currentPage}
              setPage={handlePage}
            ></Experience>
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

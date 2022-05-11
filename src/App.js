import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Albums from "./pages/Albums";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

export default function App() {
  const [menuIsVisible, setMenuIsVisible] = React.useState(false);
  const [searchFormIsVisible, setSearchFormIsVisible] = React.useState(false);

  return (
    <Router>
      <>
        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
          searchFormIsVisible={searchFormIsVisible}
          setSearchFormIsVisible={setSearchFormIsVisible}
        />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

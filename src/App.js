import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from './components/contact';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

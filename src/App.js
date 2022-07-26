import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/contact';
import Login from './components/dashboard/login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

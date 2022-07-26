import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/contact';
import Login from './components/dashboard/login';
import Dashboard from './components/dashboard/dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {!window.location.href.includes('/dashboard')
        ?
        <Header />
        :
        null
      }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard/login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        {!window.location.href.includes('/dashboard')
          ?
          <Footer />
          :
          null
        }
      </BrowserRouter>
    </div>
  );
}


export default App;

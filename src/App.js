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
      {/* <BrowserRouter>
      {!window.location.href.includes('/dashboard')
        ?
        <Header />
        :
        null
      }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {!window.location.href.includes('/dashboard')
          ?
          <Footer />
          :
          null
        }
      </BrowserRouter> */}
      {
        !window.location.href.includes('/dashboard')
        ?
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      :
      null
      }
      {
        window.location.href.includes('/dashboard')
        ?
        <BrowserRouter>
          <Routes>
            <Route path="dashboard/login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      :
      null
      }
    </div>
  );
}

export default App;

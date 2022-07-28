
import Home from './components/home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/contact';
import Login from './components/dashboard/login';
import DashboardDetails from './components/dashboard/dashboardDetails';

import Message from './components/dashboard/message';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';



const App = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/*" element={<ProtectedRoute />} >
          <Route path="dashboard" element={<DashboardDetails />} />
          <Route path="message" element={<Message />} />
				</Route>
				<Route path="/" element={<PublicRoute />} >
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App;


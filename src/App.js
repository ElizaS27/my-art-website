import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from './pages/user/User';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/exercises/users" element={<Users/>}/>
        <Route path="/exercises/users/:id" element={<User/>}/>
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

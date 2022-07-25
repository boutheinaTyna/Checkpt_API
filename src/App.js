import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="Users" element={< Users />} />
                        <Route path="Profile/:id" element={< Profile />} />
                    </Route>
                </Routes>
      </header>
    </div>
  );
} 

export default App;


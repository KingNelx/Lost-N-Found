import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import AdminForm from './Components/Admin/AdminForm';
import AdminHome from './Components/Admin/AdminHome';
import LostItems from './Components/LostItems';
import FoundItems from './Components/FoundItems';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminForm" element={<AdminForm />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/lostItems" element={<LostItems />} />
        <Route path="/foundItems" element={<FoundItems />} />
      </Routes> 
    </Router>
  );
}

export default App;
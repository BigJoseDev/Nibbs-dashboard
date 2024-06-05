import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Dashboard from './components/Dashboard';
import BillersComp from './components/BillersComp';

import Mandates from './components/Mandates';
import Transactions from './components/Transactions';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Features from './components/Features.jsx';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
        <Sidebar />
        </div>
        <div className="basis-[88%] border  ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Billers" element={<BillersComp />} />
            <Route path="/Mandates" element={<Mandates/>} />
            <Route path="/Transactions" element={<Transactions/>} />
            <Route path="/Reports" element={<Reports/>} />
            <Route path="/Settings" element={<Settings/>} />
            <Route path="/Features" element={<Features/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
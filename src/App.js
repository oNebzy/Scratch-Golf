import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Clubhouse from './screens/Clubhouse';
import LandingPage from './screens/LandingPage';
import StatScreen from './screens/StatScreen';

function App() {

  const location = useLocation();

  return (
    
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/Clubhouse" element={<Clubhouse/>}></Route>
            <Route path="/Dashboard" element={<AboutScreen/>}></Route>
          </Routes>
        
      </AnimatePresence>
    
  );
}

export default App;

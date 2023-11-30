import './App.css';
import Navbar from './components/Navbar.js';
import Marketplace from './components/Marketplace';
import InformationPage from "./components/InformationPage";
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import NFTPage from './components/NFTpage';
import Payment from './components/payment';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Marketplace />}/>
          <Route path="/nftPage" element={<NFTPage />}/>        
          <Route path="/profile" element={<Profile />}/>
          <Route path="/sellNFT" element={<SellNFT />}/>  
          <Route path="/payment" element={<Payment />}/>    
          <Route path="/InformationPage" element={<InformationPage />}/>       
        </Routes>
    </div>
  );
}

export default App;

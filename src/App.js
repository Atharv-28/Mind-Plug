import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SocialHealth from "./pages/socialHealth";
import HealthyRelation from "./pages/healthyRelationships";
import SocialNetwork from "./pages/socialNetwork";
import MentalSocial from "./pages/mentalSocial";
import Community from "./pages/community";
import Navbar from './pages/navbar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="socialhealth" element={<SocialHealth />} />
          <Route path="healthyrelationship" element={<HealthyRelation />} />
          <Route path="socialnetwork" element={<SocialNetwork />} />
          <Route path="mental&social" element={<MentalSocial />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

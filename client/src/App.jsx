import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Home from "./pages/Home";
import Test from "./pages/Test";
import Stripe from "./pages/Stripe";
import Store from "./pages/Store";
import AssetMaker from "./pages/AssetMaker";
import PlayerSearch from "./pages/PlayerSearch";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";


function Routing() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route exact path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/stripe" element={<Stripe />} />
        <Route path="/store" element={<Store />} />
        <Route path="/assetMaker" element={<AssetMaker />} />
        <Route path="/playerSearch" element={<PlayerSearch />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="h-screen z-0 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-firefox md:scrollbar">
      <Router>
        <div>test</div>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
}

export default App;

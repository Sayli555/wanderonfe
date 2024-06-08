import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Banner from './components/BannerPage';
import WhyWandorn from './components/Why';
import SignupForm from './page/Signup';
import PasswordForm from './components/password';
import Login from './page/Login';
import { Routes,Route} from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './page/PrivateRoute';
import Signup from './page/Signup';
import Details from './page/Details';
import LandingPage from './page/LandingPage';

function App() {
  return (
    <div className="App">
      {/* 
      <Banner/>
      <WhyWandorn/> */}
      {/* <SignupForm/> */}
      {/* <PasswordForm/> */}
      <NavBar/>
      <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/details"
                element={
                    <PrivateRoute>
                        <Details />
                    </PrivateRoute>
                }
            />
        </Routes>
    </div>
  );
}

export default App;

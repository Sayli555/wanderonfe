import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Banner from './components/BannerPage';
import WhyWandorn from './components/Why';
import SignupForm from './page/Signup';

function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Banner/>
      <WhyWandorn/> */}
      <SignupForm/>
    </div>
  );
}

export default App;

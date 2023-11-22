
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import FoodForm from './Components/FoodForm'
import ImgBox from './Components/ImgBox'

function App() {
  return (
    <div className="App">
      <Header />
      <FoodForm />
      <ImgBox />
      <Header />
      <Footer/>
    </div>
  );
}

export default App;

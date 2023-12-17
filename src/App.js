import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Header2 from './components/header2/header2';
import Recom from './components/recommend/recommend';
import ProFilter from './components/prodfilter/proFilter';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='fit-content'>
      <Header/>
      <Navbar/>
      <Header2/>
      <Recom/>
      <ProFilter/>
      <Footer/>
      
    </div>
  );
}

export default App;

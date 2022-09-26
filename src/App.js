
import './App.css';
import AnimatedRoutes from './Components/Animated/AnimatedRoutes';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer.js'
// import Main from './Components/Main/Main';
// import Gallery from './Components/Gallery/Gallery';

// import Testimonials from './Components/Testimonials/Testimonials';
// import Service from './Components/Service/Service';




function App() {
  return (
    <div className="App">

  <Header></Header>
  {/* <Main></Main>
  <About></About>
  <Contact></Contact> */}
  
      {/* <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
     
      </Routes> */}
      <AnimatedRoutes></AnimatedRoutes>

      <Footer></Footer>


   

    </div>
  );
}

export default App;

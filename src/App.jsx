
import './App.css';

import Cards from './Cards';
import Home from './Home';
import ThemeProvider from './ThemeProvider';
import ThemedComponent from './ThemedComponent';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';


function App() {
  return (
   
    <ThemeProvider>
    
    <ThemedComponent/>
   
    </ThemeProvider>

    // {/* <h1>welcome</h1>
    // <h1>hai</h1>
    // <p>dfgh</p>
    // {/* <Home title='first' body='first body' class='bg-black text-white mb-4'/>
    // <Home title='second' class='bg-danger text-white mb-4 '/>
    // <Home title='third'/> */}

    // {/* <div className='container'>
    // <div className='row'>
    //   <div className='col mb-4'>
    // <Cards src={img1} class='card1' title='anees' text='hello' />
    //   </div>
    //   <div className='col mb-4'>
    // <Cards src={img2} title='anees' text='hello' />
    //   </div>
    //   <div className='col mb-4'>
    // <Cards src={img3} title='anees' text='hello' />
    // </div>
    // </div>
    //     <div className='row'>
    //     <div className='col mb-4'>
    // <Cards src={img4} title='anees' text='hello' />
    //   </div>
    //   <div className='col mb-4'>
    // <Cards src={img5} title='anees' text='hello' />
    // </div>
    // <div className='col mb-4'>
    // <Cards src={img6} class='card1' title='anees' text='hello' />
    // </div>
    // </div>
    // </div> */} 
   
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import images_1 from './img/react.jpg';
import images_2 from './img/193-1936597_8k-ultra-hd-wallpapers-fresh-8k-ultra-hd.jpg'
import images_3 from './img/8K-Desktop-Wallpaper-scaled.jpg'

function App() {

  // let [bir, setbir] = useState(0);
  //  let[eki, seteki] = useState('')
      const [count, setCuont] = useState(images_2)


  return (
    <div className="App">
      
     {/* <h1>welcome</h1>
     <p>{bir}</p>
    <button onClick={()=> setbir(bir + 1)}>+</button>
    <button onClick={()=> setbir(bir - 1)}>-</button> */}

    {/* <h2>pishi</h2>
    <p>{eki}</p>
    <button onClick={()=> seteki('privet')}>privet</button>
    <button onClick={()=> seteki('poka')}>poka</button> */}


    
<div> <img src={count}/> </div>
   <img onClick={()=> seteki(images_1)}/>
   <img onClick={()=> seteki(images_3)}/>
  

    


    
  

    </div>
  );
}

export default App;

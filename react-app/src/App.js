
import './App.css';
import React, { useEffect } from 'react';
import Gallery from './components/Gallery';
import Hero from './components/hero'

function App() {

  useEffect(() =>{
    // const imgg = async () => {
    //   // const data = await fetch('http://localhost:3001/img')
    //   console.log(data.json())
    //   const images = data.json
    // }
    // imgg()
  } ,[])

  return (
    <div className="App">
      <section id='hero'>
        <div id='txt'>PHOTO GALLERY</div>
      </section>
      <section id="gallery" class="flex grid justify-center items-center xl:max-w-[1280px] w-full ">
        <Gallery/>
      </section>
    </div>
  );
}

export default App;

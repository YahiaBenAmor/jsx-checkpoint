import React from 'react'; 
import theImage from './image2.png'
import './App.css'; 
import './style.css'; 

function App() {
  return (
    <div className="App">
<div style={{border:'solid 1 black',maxWidth:'100vw'}}></div> 
<h1 className={'title red'}>Yahia Ben Amor</h1> 
<br/> 
<img src={theImage} className="img" /> <br/> 
<img src={"/image.jpg"} className="img" /> <br/>
<video width={320} height={240} controls>  
    <source src="myVideo.mp4" type="video/mp4" /> 
  </video>
    </div>
  );
}

export default App;

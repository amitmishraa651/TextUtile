import  { useState } from 'react'
import  Navbar from './assets/Navbar.jsx' 
import {CopyToClipboard} from 'react-copy-to-clipboard';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css'

const App = () => {
  // const startListening =()=> SpeechRecognition.startListening({continuous:true,language:'en-IN'});
  const[upper,setupper]=useState('');
  const[copied,setcopied]=useState(false)

  // const{transcript,browerSupportsSpeechRecognition}=useSpeechRecognition()

  // if (!browerSupportsSpeechRecognition){
  //   return null
  // }
  function upcase(){
    setupper(upper.toUpperCase())

  }
  function lower(){
    setupper(upper.toLowerCase())
  }
  function trims(){
    setupper(upper.trim())
  }
  function repeats(){
    setupper(upper.repeat( 2))
  }
  function captial(){
    setupper(upper[0].toUpperCase()+upper.slice(1).toLowerCase())
  }
  function del(){
    setupper("")
  }
  return (
    <div className='text'>
      <Navbar/>
      <h2 className='heading'>Enter The Text To Analyze Below</h2>
      <textarea type="text" placeholder='Enter Text' name="text" id="text" value={upper}  onChange={e=> setupper(e.target.value)} ></textarea><br/>
      <button className='btn' onClick={upcase}>Upper</button>
      <button onClick={lower}>Lower</button>
      <button onClick={trims}>Trim</button>
      <button onClick={repeats}>Repeat</button><br/>
      <button className='btn' onClick={captial}>Captial</button>
      {/* <button onClick={startListening()}>Start</button> */}
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}

      <CopyToClipboard text={upper} oncopy={()=>setcopied(true)}>
        
        <button >Copy</button>

      </CopyToClipboard>
      {copied ? <span style={{color:'green'}}>Copied</span>:null}

      
      <button onClick={del}>Clear area</button>

 


      <div className='output'>
      <h2 className='summery'>Your text summery</h2>
      <p>{upper.split(" ").length-1} Words and {upper.length} characters</p>
      <p style={{paddingBottom:"20px"}}>{0.008 * upper.split("").length} Minutes read</p>
      <hr />
      <h2 className='preview'>Preview</h2>
      <p className='pre'>{upper}</p>
      </div>

      <div className='footer'> 
        <p> Copyright &#169; 2024, Created by Amit.</p>
      </div>
    </div>
  )
}

export default App

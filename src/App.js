import React,{useState} from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";


function App() {
  const [value, setChange] = useState('');
  const [result, setResult] = useState('');
  console.log(result);
  
  return (
    <div className="App">
      <header className="App-header">Markdown Previewer</header>
      <div className="container">
        <Editor onChange={setChange}/>
        <Preview value={value} setResult={setResult}/>
      </div>
    </div>
  );
}

export default App;

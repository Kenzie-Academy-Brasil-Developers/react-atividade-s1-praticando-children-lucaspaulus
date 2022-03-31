import './App.css';
import CenteredCard from'./components/card/CenteredCard.js'
import {useState} from "react"

function App() {
  const [qtd,setQtd] = useState(0)  

  let interval = setInterval( () => {

    if (qtd < 5) {
      setQtd(qtd + 1)
      clearInterval(interval);
    }
  
  }, 1000 );

  return (
    <div className="App">
      <header className="App-header">
          <CenteredCard><h1>{qtd}</h1></CenteredCard>
      </header>
    </div>
  );
}



export default App;


import { HashRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/MainComponent";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;

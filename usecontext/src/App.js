import Counter from "./componets/Counter.jsx";
import CounterTwo from "./componets/CounterTwo";
import { GlovalProvider } from "./context/GlovalContext";
import "./App.css";

function App() {
  return (
    <GlovalProvider>
      <div className="App">
        <Counter />
        <CounterTwo />
      </div>
    </GlovalProvider>
  );
}

export default App;

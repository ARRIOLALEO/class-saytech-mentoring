import { GlovalProvider } from "./context/GlovalContext";
import Header from "./componets/Header";
import "./App.css";

function App() {
  return (
    <GlovalProvider>
      <div className="App">
        <Header />
      </div>
    </GlovalProvider>
  );
}

export default App;

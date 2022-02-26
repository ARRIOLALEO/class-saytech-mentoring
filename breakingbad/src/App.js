import { useEffect, useState } from "react";
import Header from "./components/ui/Header.jsx";
import GridCharacters from "./components/characters/GridCharacters.jsx";
import Search from "./components/ui/Search.jsx";
import "./App.css";
const url = "https://www.breakingbadapi.com/api/characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchingApi();
    console.log("im calling the API");
  }, [query]);

  const fetchingApi = async () => {
    try {
      const request = await fetch(url + `?name=${query}`);
      const data = await request.json();
      setCharacters(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <GridCharacters isLoading={loading} characters={characters} />
    </div>
  );
}

export default App;

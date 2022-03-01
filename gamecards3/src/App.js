import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./App.css";

const URL = "https://api.unsplash.com/photos/?client_id=";
const KEY = "VduzBSnLRhIoADD49QT7f2MprxoTXC7HnSAuNcCTBCM";

function App() {
  const [photos, setPhotos] = useState([]);

  const fechingFromServer = async () => {
    try {
      const [page1, page2] = await axios.all([
        axios.get(URL + KEY + "&page=2"),
        axios.get(URL + KEY + "&page=3"),
      ]);

      let data = [
        ...page1.data,
        ...page1.data,
        ...page2.data.slice(0, 2),
        ...page2.data.slice(0, 2),
      ];

      data = data.map((image) => {
        return { ...image, unique: nanoid() };
      });

      setPhotos(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fechingFromServer();
  }, []);
  return (
    <div className="App">
      {photos.map((photo, index) => {
        return (
          <div className="card" key={photo.unique}>
            <img src={photo.urls.thumb} alt={photo.alt_description} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

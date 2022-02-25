import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./App.css";

const mainUrl = "https://api.unsplash.com/photos/";
const key = "u6utzl03gS69VAPTnlbRIXKI2FGtE5-bnhAe3yrTBLA";
function App() {
  const [photos, setPhotos] = useState([]);
  const fechingPhotos = async () => {
    const url1 = `${mainUrl}?client_id=${key}&page=${3}`;
    const url2 = `${mainUrl}?client_id=${key}&page=${4}`;
    let [page1, page2] = await axios.all([axios.get(url1), axios.get(url2)]);
    // console.log(page1.data, page2.data);
    let data = [...page1.data, ...page1.data, ...page2.data.slice(0, 2), ...page2.data.slice(0, 2)];
    console.log(data);
    data = data.map((image) => ({ ...image, unique: nanoid() }));

    const shuffle = (arr) => {
      for (let index = 0; index < arr.length; index++) {
        const ramdom = Math.floor(Math.random() * arr.length);
        [arr[index], arr[ramdom]] = [arr[ramdom], arr[index]];
      }
      return arr;
    };
    data = shuffle(data);

    setPhotos(data);
  };

  useEffect(() => {
    fechingPhotos();
  }, []);
  return (
    <div className="App">
      {" "}
      {photos.map((photo) => {
        return (
          <div className="card">
            <img src={photo.urls.thumb} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

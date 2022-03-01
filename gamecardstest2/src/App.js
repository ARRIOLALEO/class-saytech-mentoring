import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./App.css";

const URL = "https://api.unsplash.com/photos/?client_id=";
const KEY = "u6utzl03gS69VAPTnlbRIXKI2FGtE5-bnhAe3yrTBLA";
function App() {
  const [photos, setPhotos] = useState([]);
  const [selected, setSelected] = useState(false);
  useState(() => {
    fetchFromAPI();
  }, []);
  async function fetchFromAPI() {
    try {
      const [page1, page2] = await axios.all([
        axios.get(URL + KEY + "&page=2"),
        axios.get(URL + KEY + "&page=3"),
      ]);
      let data = [
        ...page1.data,
        ...page1.data,
        ...page2.data.splice(0, 2),
        ...page2.data.splice(0, 2),
      ];
      data = shuffle(data);
      data = data.map((photo) => {
        return { ...photo, unique: nanoid() };
      });
      setPhotos(data);
    } catch (err) {
      console.log(err);
    }
  }

  const shuffle = (arr) => {
    for (let index = 0; index < arr.length; index++) {
      const rand = Math.floor(Math.random() * arr.length);
      [arr[index], arr[rand]] = [arr[rand], arr[index]];
    }
    return arr;
  };

  const handlerClick = (id) => {
    const foundIndex = photos.findIndex((photo) => photo.unique === id);
    let newData = [...photos];
    newData[foundIndex].liked_by_user = true;
    setPhotos(newData);
    if (selected === null) {
      setSelected(newData[foundIndex]);
      return;
    } else {
      newData = newData.map((photo) => ({ ...photo, liked_by_user: false }));
      if (setSelected.unique !== setSelected.unique) {
        setTimeout(() => {
          setPhotos(newData);
          setSelected(null);
          return;
        }, 500);
      } else {
        if (selected.id !== newData[foundIndex].id) {
          setTimeout(() => {
            setSelected(null);
            setPhotos(newData);
          }, 500);
        } else {
          newData = newData.map((photo) =>
            photo.id === selected.id ? { ...photo, blur_hash: "" } : photo
          );
          setPhotos(newData);
          setSelected(null);
        }
      }
    }
  };

  return (
    <div className="App">
      {photos.map((photo) => {
        let showImage;
        if (!photo.liked_by_user) {
          showImage = "";
        }
        if (photo.liked_by_user || !photo.blur_hash) {
          showImage = "show";
        }
        return (
          <div key={photo.unique} className="card" onClick={() => handlerClick(photo.unique)}>
            <img src={photo.urls.thumb} alt={photo.description} className={showImage} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

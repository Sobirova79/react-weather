import { createContext, useEffect, useState } from "react";

const Context = createContext();
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

function ContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [region, setRegion] = useState("Tashkent");

  useEffect(() => {
    (async function () {
      try {
        const res1 = await fetch(
          `${API_URL}/geo/1.0/direct?q=${region}&appid=${API_KEY}`
        );
        const geo = await res1.json();
        const res2 = await fetch(
          `${API_URL}/data/2.8/onecall?lat=${geo[0].lat}&lon=${geo[0].lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
        );
        const data = await res2.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [region]);

  return (
    <Context.Provider value={{ data, region, setRegion }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

import { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useFlip = () => {
    const [state, setState] = useState(true);
    const toggleState = () => {
        setState(state => !state)
    };
    return[state, toggleState]
}

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);

  const fetchData = async (restOfUrl) => {
      try {
        let apiUrl = baseUrl;
        if (restOfUrl) {
            apiUrl += restOfUrl;
        }
        const res = await axios.get(apiUrl);
        setData((prevData) => [...prevData, { ...res.data, id: uuid() }]);
        
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [data, fetchData];
};

export { useFlip, useAxios };




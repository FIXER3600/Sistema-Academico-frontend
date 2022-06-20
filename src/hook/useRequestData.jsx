import { useEffect, useState } from "react";
import api from "../service/api";

const useRequestData = (initialData, path) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
   
      api
        .get(`${path}`)
        .then(({ data }) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setIsLoading(false);
        });
    
  }, [path]);

  return { data, isLoading };
};

export default useRequestData;
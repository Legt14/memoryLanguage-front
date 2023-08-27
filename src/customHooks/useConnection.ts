import { useEffect, useState } from "react";
import { Connection } from "../models/connection.model";

const useConnection = ({ url }: Connection) => {
  const [loading, setloading] = useState<boolean>(false);
  const [data, setdata] = useState<string[]>();
  const [error, seterror] = useState<string | null>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const response = await fetch(url);
        const responseData = await response.json();
        setdata(responseData);
      } catch (e) {
        seterror("Load data error");
      }finally{
        setloading(false)
      }
    };
    fetchData();
  }, [url]);
  return {data, loading, error}
};

export { useConnection };

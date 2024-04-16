import { useEffect, useState } from "react";

type DataInterface = {
  activity: string;
  price: number;
};

export const useFetch = (API_URL: string) => {
  const [data, setData] = useState<DataInterface[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        const jsonData = await response.json();
        setData([jsonData]);
        // console.log(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [API_URL]);

  return { data };
};

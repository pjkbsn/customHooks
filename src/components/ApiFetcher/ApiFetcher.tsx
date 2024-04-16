import { useEffect, useState } from "react";

type DataInterface = {
  activity: string;
  price: number;
};

export const ApiFetcher = () => {
  const [data, setData] = useState<DataInterface[] | null>(null);

  const API_URL = "http://www.boredapi.com/api/activity/";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);

      const jsonData = await response.json();
      setData([jsonData]);
      // 'console.log(jsonData);'
    };

    fetchData();
  }, [API_URL]);

  return (
    <ul>
      {data &&
        data.map((item, i) => (
          <li key={i}>
            {item.activity}, {item.price}
          </li>
        ))}
    </ul>
  );
};

import { useFetch } from "../../hooks/useFetch";

export const ApiFetcher = ({ API_URL }: { API_URL: string }) => {
  const { data } = useFetch(API_URL);

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <ul>
        {data &&
          data.map((item, i: number) => (
            <li key={i}>
              Activity: {item.activity} <br />
              Price: {item.price}
            </li>
          ))}
      </ul>
    </>
  );
};

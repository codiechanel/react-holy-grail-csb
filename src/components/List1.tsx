import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface ItemsProps {
  keyword?: any;
  history?: any;
}

const List1: React.SFC<ItemsProps> = ({ keyword, history }) => {
  // function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${keyword}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
export default List1;

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./component/Search";

const AddBook = () => {
  const [datas, setDatas] = useState([]);
  const [read, setRead] = useState({ title: "", author: "" });
  // const [dateValue, setdateValue] = useState("");

  // useEffect(() => {
  //   console.log("read" + read);
  // }, []);

  const search = (searchValue: string) => {
    console.log("親押された");
    console.log(searchValue);
    const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${encodeURI(
      searchValue
    )}&booksGenreId=001004008&applicationId=${
      process.env.REACT_APP_RAKUTEN_APPLICATION_ID
    }`;
    axios
      .get(URL)
      .then((result) => setDatas(result.data.Items))
      .catch((err) => console.log(err));
  };

  const onSelect = (data: any) => {
    console.log(data);
    // alert(`${data.Item.title} ${data.Item.author}`);
    setRead({ ...read, title: data.Item.title, author: data.Item.author });
    console.log("read" + read);
    // console.log(dateValue);
  };
  // console.log(datas);
  // console.log(encodeURI(enc));

  return (
    <div className="App">
      <Search search={search} />
      <input type="date"></input>
      <hr />
      <div className="book">
        <p>
          {read.author}/{read.title}
        </p>
        {/* <p>{searchWord}</p> */}
        {datas.map((data: any) => (
          <>
            <div key={data.Item.booksGenreId}>
              <div>{data.Item.title}</div>
              <div>{data.Item.author}</div>
              <div>{data.Item.seriesName}</div>
              <div>
                <img src={data.Item.largeImageUrl} alt="写真"></img>
              </div>
              <div>
                <a href={data.Item.itemUrl}>URL</a>
              </div>
              <div>
                <button onClick={() => onSelect(data)}>選択</button>
              </div>
              <hr />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AddBook;

import axios from "axios";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./component/Modal";
import Search from "./component/Search";
import styled from "styled-components";

// styled-components
//--------------------------
const SelectButton = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
`;

//--------------------------

const AddBook = () => {
  const [datas, setDatas] = useState([]);
  // const [read, setRead] = useState([{ title: "", author: "" }]);
  // const [dateValue, setDateValue] = useState("");
  // const [alert, setAlert] = useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [info, setInfo] = useState({
    imageUrl: "",
    title: "",
    author: "",
    seriesName: "",
  });
  const [alert, setAlert] = useState(false);

  const search = (searchValue: string) => {
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

  const onSelect = useCallback((Item: any) => {
    setShowModal(true);
    setInfo({
      ...info,
      imageUrl: Item.largeImageUrl,
      title: Item.title,
      author: Item.author,
      seriesName: Item.seriesName,
    });
  }, []);

  return (
    <div className="w-full">
      {alert ? (
        <div
          className="w-1/3 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          本棚に入れておきました
        </div>
      ) : null}
      <Search search={search} />
      <div className="flex flex-wrap">
        {/* <p>
          {read.map((rea) => (
            <div>
              {rea.title}
              {rea.author}
            </div>
          ))}
          <hr />
        </p> */}
        {datas.map((data: any) => (
          <>
            <div className="relative w-1/5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-center p-5">
                <img className="" src={data.Item.largeImageUrl} alt="" />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.Item.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.Item.author}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.Item.seriesName}
                </p>
              </div>
              <div className="p-5">
                <SelectButton>
                  <button
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    data-modal-toggle="defaultModal"
                    onClick={() => onSelect(data.Item)}
                  >
                    選択
                  </button>
                </SelectButton>
              </div>
            </div>
          </>
        ))}
        <Modal
          data={{ ...info }}
          showFlag={showModal}
          setShowModal={setShowModal}
          setAlert={setAlert}
        />
      </div>
    </div>
  );
};

export default AddBook;

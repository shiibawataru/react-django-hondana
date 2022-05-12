import axios from "axios";
import React, { useCallback, useState } from "react";
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

type BookData = {
  Item: {
    id: number;
    largeImageUrl: string;
    title: string;
    author: string;
    seriesName: string;
    comment: string;
    readDay: string;
  };
};

type BookItem = {
  id: number;
  largeImageUrl: string;
  title: string;
  author: string;
  seriesName: string;
  comment: string;
  readDay: string;
};

const AddBook = () => {
  const [datas, setDatas] = useState([]);
  const [alert, setAlert] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [info, setInfo] = useState({
    imageUrl: "",
    title: "",
    author: "",
    seriesName: "",
  });

  const search = (searchValue: string) => {
    const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${encodeURI(
      searchValue
    )}&booksGenreId=001004008&applicationId=${
      process.env.REACT_APP_RAKUTEN_APPLICATION_ID
    }`;
    axios
      .get(URL)
      .then((result) => setDatas(result.data.Items))
      .then(() => setAlert(false))
      .catch((err) => setAlert(true));
  };

  const onSelect = useCallback((Item: BookItem) => {
    setShowModal(true);
    setInfo({
      // ...info,
      imageUrl: Item.largeImageUrl,
      title: Item.title,
      author: Item.author,
      seriesName: Item.seriesName,
    });
  }, []);

  return (
    <div className="w-full">
      <Search
        search={search}
        setAlert={setAlert}
        alert={alert}
        datas={datas}
        setDatas={setDatas}
      />

      <div className="flex flex-wrap">
        {React.Children.toArray(
          datas.map((data: BookData) => (
            <>
              <div
                key={data.Item.id}
                className="relative w-1/2 lg:w-1/5 md:w-1/3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-center p-5">
                  <img className="" src={data.Item.largeImageUrl} alt="" />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 sm:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
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
          ))
        )}
        <Modal
          data={{ ...info }}
          showFlag={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default AddBook;

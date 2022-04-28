import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import BookDetail from "./component/BookDetail";
// import { Modal } from "./component/Modal";

// styled-components
//--------------------------
const Book = styled.div`
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  height: 700px;
`;

// const BookShelf = styled.div`
//   border: solid;
// `;

//--------------------------

const Home = () => {
  const [books, setBooks] = useState([]);
  // const [bookDetail, setBookDetail] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [info, setInfo] = useState({
    imageUrl: "",
    title: "",
    author: "",
    seriesName: "",
    comment: "",
    readDay: "",
  });

  const [editComment, setEditComment] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editSeriesName, setEditSeriesName] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  const [selectId, setSelectId] = useState();
  // const [showModal,setShowModal] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:8000/app/books/")
      // .then((res: any) => console.log(res.data))
      .then((res: any) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 削除
  const onDelete = () => {
    axios.delete(`http://localhost:8000/app/books/${selectId}`);
    setShowModal(false);
    alert(`${info.author}の「${info.title}」を削除しました`);
    //　リアルタイム削除用
    setBooks(books.filter((book: any) => book.id !== selectId));
  };

  // 選択、モーダルオープン
  const onOpen = (Item: any) => {
    setSelectId(Item.id);
    setShowModal(true);
    setInfo({
      imageUrl: Item.imageUrl,
      title: Item.title,
      author: Item.author,
      seriesName: Item.seriesName,
      comment: Item.comment,
      readDay: Item.readDay,
    });
  };
  // モーダル閉じる
  const closeModal = () => {
    setShowModal(false);
  };

  //　更新
  const onUpdate = () => {
    axios.put(`http://localhost:8000/app/books/${selectId}/`, {
      imageUrl: info.imageUrl,
      title: editTitle || info.title,
      author: editAuthor || info.author,
      seriesName: editSeriesName || info.seriesName,
      comment: editComment || info.comment,
      readDay: editDate || info.readDay,
    });
    setShowModal(false);
    // alert(`${info.author}の「${info.title}」を更新しました`);
  };

  return (
    <>
      <div className="flex flex-wrap m-10">
        {books.map((book: any, index) => {
          return (
            <>
              <Book>
                <div
                  key={index}
                  onClick={() => onOpen(book)}
                  className="flex h-full w-16 p-2 max-w-sm bg-white hover:bg-indigo-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <p className="h-3/5 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {book.title}
                  </p>
                  <p className="h-1/5 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {book.author}
                  </p>
                  <p className="h-1/5 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {book.seriesName}
                  </p>
                </div>
              </Book>
            </>
          );
        })}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Book Information</h3>
                  {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"> */}
                  <button
                    className="justify-end text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={onDelete}
                  >
                    削除
                  </button>
                  {/* </div> */}
                </div>
                <form className="flex p-5" action="#">
                  <div className="p-2">
                    <img src={info.imageUrl} alt="表紙写真" />
                  </div>
                  <div className="p-2 w-full">
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        タイトル
                      </label>
                      <input
                        defaultValue={info.title}
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        onChange={(event) => setEditTitle(event.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="author"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        著者
                      </label>
                      <input
                        defaultValue={info.author}
                        type="text"
                        name="author"
                        id="author"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        onChange={(event) => setEditAuthor(event.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="seriesName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        出版社
                      </label>
                      <input
                        defaultValue={info.seriesName}
                        type="text"
                        name="seriesName"
                        id="seriesName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        onChange={(event) =>
                          setEditSeriesName(event.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="comment"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        コメント
                      </label>
                      <textarea
                        defaultValue={info.comment}
                        onChange={(event) => setEditComment(event.target.value)}
                        name="comment"
                        id="comment"
                        className="h-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="comment"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        読み終えた日
                      </label>
                      <input
                        type="date"
                        defaultValue={info.readDay}
                        onChange={(event) => setEditDate(event.target.value)}
                      ></input>
                    </div>
                  </div>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={onUpdate}
                  >
                    更新
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Home;

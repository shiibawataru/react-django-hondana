import axios from "axios";
import React, { useState } from "react";

export default function Modal({ data }: { data: any }) {
  console.log(data.data.Item.title);
  const [showModal, setShowModal] = React.useState(false);
  const [info, setInfo] = useState({
    imageUrl: "",
    title: "",
    author: "",
    seriesName: "",
  });
  const [dateValue, setDateValue] = useState("");
  const [comment, setComment] = useState("");
  const [addValue, setAddValue] = useState(false);

  const onSelect = () => {
    setShowModal(true);
    setInfo({
      ...info,
      imageUrl: data.data.Item.largeImageUrl,
      title: data.data.Item.title,
      author: data.data.Item.author,
      seriesName: data.data.Item.seriesName,
    });
  };

  const onAdd = () => {
    setShowModal(false);
    axios.post("http://localhost:8000/app/books/", {
      imageUrl: info.imageUrl,
      title: info.title,
      author: info.author,
      seriesName: info.seriesName,
      comment: comment,
      readDay: dateValue,
    });
    setAddValue(true);
    // alert(addValue);
  };

  return (
    <>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-toggle="defaultModal"
        onClick={onSelect}
      >
        選択
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Book Information</h3>
                </div>
                <form className="flex p-5" action="#">
                  <div className="p-2">
                    <img src={data.data.Item.largeImageUrl} alt="表紙写真" />
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
                        value={info.title}
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                        value={info.author}
                        type="text"
                        name="author"
                        id="author"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                        value={info.seriesName}
                        type="text"
                        name="seriesName"
                        id="seriesName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
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
                        value={dateValue}
                        onChange={(event) => setDateValue(event.target.value)}
                      ></input>
                    </div>
                  </div>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={onAdd}
                  >
                    追加
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
}

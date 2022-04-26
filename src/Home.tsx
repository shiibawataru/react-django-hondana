import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

// styled-components
//--------------------------
const Book = styled.div`
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
`;

//--------------------------

const Home = () => {
  const [books, setBooks] = useState([]);
  const [bookDetail, setBookDetail] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/app/books/")
      // .then((res: any) => console.log(res.data))
      .then((res: any) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onDelete = (id: any) => {
    alert("sakujo");
    axios.delete(`http://localhost:8000/app/books/${id}`);
  };

  const onOpen = (id: any) => {
    setBookDetail(!bookDetail);
    alert(id);
  };

  return (
    <>
      {/* <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      >
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-color-body-1"
            aria-expanded="true"
            aria-controls="accordion-color-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-1"
          className="hidden"
          aria-labelledby="accordion-color-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-wrap m-10">
        {books.map((book: any) => {
          return (
            <>
              <Book>
                <div
                  onClick={() => onOpen(book.id)}
                  className="flex h-full w-16 p-2 max-w-sm bg-white hover:bg-indigo-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  {/* <div className="h-1/2"> */}
                  <p className="h-3/5 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {book.title}
                  </p>
                  {/* </div> */}
                  {/* <div className="h-1/4"> */}
                  <p className="h-1/5 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {book.author}
                  </p>
                  {/* </div> */}
                  {/* <div className="h-1/4"> */}
                  <p className="h-1/5 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {book.seriesName}
                  </p>
                  {/* </div> */}
                </div>
              </Book>

              {/* {bookDetail && (
                <div className="flex h-auto w-96 p-2 max-w-sm bg-white hover:bg-indigo-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <img src={book.imageUrl} alt="" />
                  </div>
                  <div>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <div>{book.seriesName}</div>
                    <div>{book.comment}</div>
                    <div>{book.readDay}</div>
                  </div>
                  <div>
                    <button onClick={() => onDelete(book.id)}>削除</button>
                  </div>
                </div>
              )} */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;

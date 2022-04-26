import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./component/Modal";
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
  const [read, setRead] = useState([{ title: "", author: "" }]);
  const [dateValue, setDateValue] = useState("");
  // const [alert, setAlert] = useState(true);

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

  // const add = (add: any) => {
  //   console.log();
  // };

  return (
    <div className="w-full">
      {/* <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon=""
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
          id="accordion-collapse-body-1"
          className=""
          aria-labelledby="accordion-collapse-heading-1"
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
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon=""
              className="w-6 h-6 shrink-0"
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
          id="accordion-collapse-body-2"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>
              What are the differences between Flowbite and Tailwind UI?
            </span>
            <svg
              data-accordion-icon=""
              className="w-6 h-6 shrink-0"
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
          id="accordion-collapse-body-3"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div
        className="w-1/3 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        本棚に入れておきました
      </div>

      <Search search={search} />
      <div className="flex flex-wrap">
        <p>
          {read.map((rea) => (
            <div>
              {rea.title}
              {rea.author}
            </div>
          ))}
          <hr />
        </p>
        {datas.map((data: any) => (
          <>
            {/* <div key={data.Item.booksGenreId}>
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
                <Modal data={{ data }} />
              </div>
            </div> */}
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
                  <Modal data={{ data }} />
                </SelectButton>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AddBook;

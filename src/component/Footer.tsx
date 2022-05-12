import React from "react";

// styled-components
//--------------------------
// const Foot = styled.footer`
//   position: absolute;
//   bottom: 0;
// `;

//--------------------------

const Footer = () => {
  return (
    // <Foot>
    <>
      <footer className="bg-blue-300 p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a
            href="https://webservice.rakuten.co.jp/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://webservice.rakuten.co.jp/img/credit/200709/credit_31130.gif"
              alt="Rakuten Web Service Center"
              title="Rakuten Web Service Center"
              width="311"
              height="30"
            />
          </a>
          {/* <!-- Rakuten Web Services Attribution Snippet TO HERE --> */}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://books.rakuten.co.jp/"
              className="mr-4 hover:underline md:mr-6 "
            >
              Rakutenブックス
            </a>
          </li>
        </ul>
      </footer>
    </>
    // </Foot>
  );
};

export default Footer;

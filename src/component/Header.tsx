import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../AuthProvider";

// import styled from "styled-components";

// styled-components
//--------------------------
const LoginUser = styled.header`
  text-align: right;
  margin-top: 10px;
`;

//--------------------------

const Header = () => {
  const [buttonName, setButtonName] = useState("");
  const [loginName, setLoginName] = useState<string | null>("");

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setButtonName("Logout");
      if (user.displayName) {
        setLoginName(user.displayName);
      } else {
        setLoginName(user.email);
      }
    } else {
      setButtonName("Login");
      setLoginName("");
    }
  });

  const onLogout = () => {
    const auth = getAuth();
    if (user) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          navigate("/");
        })
        .catch((error) => {
          // An error happened.
        });
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <nav className="bg-blue-300 border-gray-200 px-4 py-2.5  dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div>
            <Link to="/home" aria-current="page" className="flex items-center">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                WeBunko
              </span>
            </Link>
          </div>
          <div className="">
            <ul className="flex mt-4 md:flex-row space-x-8 mt-0 md:text-sm md:font-medium">
              <Link to="/home" aria-current="page">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </Link>
              <Link to="/addbook">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </Link>
              <div>
                <button
                  onClick={() => onLogout()}
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {buttonName}
                </button>
              </div>
            </ul>
          </div>
        </div>
        <LoginUser>
          {user ? <div>User:{loginName}</div> : <div>User:ゲスト</div>}
        </LoginUser>
      </nav>
    </div>
  );
};

export default Header;

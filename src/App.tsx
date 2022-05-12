import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddBook from "./AddBook";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import { AuthProvider } from "./AuthProvider";

// styled-components
//--------------------------
const All = styled.div`
  min-height: 100vh; /* ←コンテンツの高さの最小値＝ブラウザの高さに指定 */
  position: relative; /* ←相対位置 */
  padding-bottom: 100px; /* ←フッターの高さを指定 */
  box-sizing: border-box;
`;

//--------------------------

function App() {
  return (
    <All>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addbook" element={<AddBook />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </All>
  );
}

export default App;

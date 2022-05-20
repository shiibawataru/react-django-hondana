import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // ページ遷移
  const navigate = useNavigate();

  const onSignUp = () => {
    // Firebase会員登録
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, mailAddress, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ログイン成功時ページ遷移
        setShowErrorMessage(false);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setShowErrorMessage(true);
        setSignUpErrorMessage(errorMessage);
      });
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="mt-12 p-4 w-5/6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="flex justify-center text-3xl font-medium text-gray-900 dark:text-white">
              Sign up
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                onChange={(event) => setMailAddress(event.target.value)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                // placeholder="sample@sample.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                name="password"
                id="password"
                // placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              {showErrorMessage && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-bold text-sm">
                    {signUpErrorMessage}
                  </span>
                </p>
              )}
            </div>
            <button
              onClick={onSignUp}
              type="button"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

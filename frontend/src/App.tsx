import { ToastContainer } from "react-toastify";
import Router from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer />
    </>
  );
};

export default App;

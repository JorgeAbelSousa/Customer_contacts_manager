import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

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

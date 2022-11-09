import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import router from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer></Footer>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import One from "./Components/One/One";
import Layout from "./Components/Layout/Layout";
import Three from "./Components/Three/Three";
import Four from "./Components/Four/Four";
import Home from "./Components/Home/Home";
import Two from "./Components/Two/Two";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home title="Home Page" />} />
              <Route
                path="/one"
                element={<One heading="How are you" title="Page One" />}
              />
              <Route path="/two" element={<Two title="Page Two" />} />
              <Route path="/three" element={<Three title="Page Three" />} />
              <Route path="/four" element={<Four title="Page Four" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Venues from "./pages/Venues";

function App() {
  return (
    <>
      <Header routes={AppRoutes}></Header>
      <main>
        <div className="container">
          <Routes>
            <Route index path="/" element={<Home />}></Route>;
            <Route index path="venues" element={<Venues />}></Route>;
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              // console.log(index, rest);
              <Route key={index} {...rest} element={element}></Route>;
            })}
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./containers/footer";
import Header from "./containers/header";
import Main from "./containers/main";
import { routes } from "./pages/router";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          {routes.map(({ route, element, key }) => (
            <Route path={route} element={element} key={key} />
          ))}
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;

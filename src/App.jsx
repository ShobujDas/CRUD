import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./page/Read";
import Create from "./page/Create";
import Update from "./page/Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Read />} path="/" />
          <Route element={<Create />} path="/create" />
          <Route element={<Update />} path="/update/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import ListGoodsPage from "./pages/ListGoodsPage";


function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<ListGoodsPage/>}/>
            </Route>
        </Routes>

    </>
  );
}

export default App;

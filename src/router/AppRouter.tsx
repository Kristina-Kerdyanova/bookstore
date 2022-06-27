import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Account } from "../pages/Account";

import { Cart } from "../pages/Cart";
import { DetailsBook } from "../pages/DetailsBook";
import { Favorite } from "../pages/Favorite";
import { Login } from "../pages/Login";

import { NewBooks } from "../pages/NewBooks";
import { Register } from "../pages/Register/Register";

// import { SearchBooks } from "../pages/SearchBooks";
import { SearchBooksResults } from "../pages/SearchBooksResults/SearchBooksResults";
import { routers } from "../routes/routers";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route index element={<NewBooks />} />
        {/* <Route path={routers.SEARCH} element={<SearchBooks />} /> */}
        <Route path={routers.SEARCH_RESULTS} element={<SearchBooksResults />} />
        <Route path={routers.FAVORITE} element={<Favorite />} />
        <Route path={routers.DETAILS_BOOK} element={<DetailsBook />} />
        <Route path={routers.CART} element={<Cart />} />
        <Route path={routers.ACCOUNT} element={<Account />} />
        <Route path={routers.SIGN_IN} element={<Login />} />
        <Route path={routers.SIGN_UP} element={<Register />} />
        {/* <Route path={routers.NOT_FOUND} element={<NotFound />} /> */}
      </Route>
    </Routes >
  );
};

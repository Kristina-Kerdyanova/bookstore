import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Account } from "../pages/Account";

import { Cart } from "../pages/Cart";
import { DetailsBook } from "../pages/DetailsBook";
import { Favorite } from "../pages/Favorite";
import { Login } from "../pages/Login";

import { NewBooks } from "../pages/NewBooks";
import { Register } from "../pages/Register";

import { SearchBooks } from "../pages/SearchBooks";
import { SearchBooksResults } from "../pages/SearchBooksResults";
import { routers } from "../routes/routers";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route index element={<NewBooks />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route
          path="/search/:title/:page"
          element={<SearchBooksResults />}
        />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/books/:id" element={<DetailsBook />} />
        <Route path="/cart" element={<Cart />} />

      </Route>

      <Route path={routers.ACCOUNT} element={<Account />} />
      <Route path={routers.SIGN_IN} element={<Login />} />
      <Route path={routers.SIGN_UP} element={<Register />} />
      {/* <Route path={routers.NOT_FOUND} element={<NotFound />} /> */}

    </Routes >
  );
};

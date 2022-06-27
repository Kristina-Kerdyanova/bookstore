import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { StyledApp } from "./styles";
import { GlobalStyle } from "./ui/GlobalStyle";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyle/>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StyledApp>
  );
};

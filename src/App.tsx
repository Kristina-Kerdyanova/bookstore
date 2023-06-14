import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { StyledApp } from "./styles";
import { GlobalStyle } from "./ui/GlobalStyle";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyle/>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </StyledApp>
  );
};

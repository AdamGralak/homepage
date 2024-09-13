import React, { useEffect } from "react";
import { Homepage } from '../index';
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, selectDarkMode } from "./repositoriesSlice";
import { username } from "../Data/index";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./globalStyled";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    dispatch(fetchRepos(username));
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Homepage />
    </ThemeProvider>
  );
};

export default App;

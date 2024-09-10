import React, { useEffect } from "react";
import { Homepage } from "./features/homepage";
import { useDispatch } from "react-redux";
import { fetchRepos } from "./features/homepage/core/repositoriesSlice";

function App() {
  const dispatch = useDispatch();
  const username = "AdamGralak";

  useEffect(() => {
      dispatch(fetchRepos(username));
  }, [dispatch, username]);
  return (
    <Homepage />
  );
}

export default App;

import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Jobs from "./pages/Jobs";
import Detail from "./components/Detail";

export default function Routes() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="list" component={Jobs} title="Job List" initial />
        <Scene key="detail" component={Detail} title="detail" />
      </Stack>
    </Router>
  );
}

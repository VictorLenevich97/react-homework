import { useState } from "react";
import { MainRoute } from "./routes/MainRoute";

function App() {
  const [allowTeams, setAllowTeams] = useState();
  return (
    <>
      <MainRoute allowTeams={allowTeams} setAllowTeams={setAllowTeams} />
    </>
  );
}

export default App;

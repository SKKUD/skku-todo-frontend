import Router from "./Router";
import { RecoilRoot } from "recoil";

import "./global.css";

function App() {
  return (
    <div className="App" style={{ outline: 0 }}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;

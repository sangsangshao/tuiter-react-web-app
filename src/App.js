import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import './App.css';
// import './vendors/bootstrap/css/bootstrap.min.css';
import ExploreComponent from "./tuiter/explore/explore-component";
import HomeScreen from "./tuiter/home/home-screen.js";
import Assignment6 from "./labs/a6/index.js";
import Assignment7 from "./labs/a7/index.js";
import ExploreScreen from "./tuiter/explore/explore-screen.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return(
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Labs/>}/>
          <Route path="/hello" element={<HelloWorld/>}/>
          <Route path="/a6" element={<Assignment6/>}/>
          <Route path="/a7" element={<Assignment7/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
          {/*<Route path="/tuiter/home" component={HomeScreen}/>*/}
          {/*<Route path="/tuiter/explore" component={ExploreComponent}/>*/}
          {/*<Route path="/tuiter/home" element={HomeScreen}/>*/}
          {/*<Route path="/tuiter/explore" element={ExploreScreen}/>*/}
        </Routes>
      </div>
      </BrowserRouter>
  );
}
export default App;

import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import './App.css';
// import './vendors/bootstrap/css/bootstrap.min.css';
import ExploreComponent from "./tuiter/explore/explore-component";
import HomeScreen from "./tuiter/home/home-screen";
import Assignment6 from "./labs/a6";
import Assignment7 from "./labs/a7";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return(
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<Labs/>}/>
          <Route path="/hello" element={<HelloWorld/>}/>
          <Route path="/a6" element={<Assignment6/>}/>
          <Route path="/a7" element={<Assignment7/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
          {/*<Route path="/tuiter/home" component={HomeScreen}/>*/}
          {/*<Route path="/tuiter/explore" component={ExploreComponent}/>*/}
        </Routes>
      </div>
      </BrowserRouter>
  );
}
export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./router/home";
import UseAxios from "./router/UseAxios";
import UseClick from "./router/UseClick";
import UseConfirm from "./router/UseConfirm";
import UseFadeIn from "./router/UseFadeIn";
import UseFullScreen from "./router/UseFullScreen";
import UseInput from "./router/UseInput";
import UseNetwork from "./router/UseNetworkHook";
import UseNotification from "./router/UseNotification";
import UsePageLeave from "./router/UsePageLeave";
import UsePrevent from "./router/UsePrevent";
import UseScroll from "./router/UseScroll";
import UseTabs from"./router/UseTabs";
import UseTitle from "./router/UseTitle";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/useinput">
          <UseInput/>
        </Route>
        
        <Route path="/usetabs">
          <UseTabs/>
        </Route>
        
        <Route path="/usetitle">
          <UseTitle/>
        </Route>
        
        <Route path="/useclick">
          <UseClick/>
        </Route>

        <Route path="/useconfirm">
          <UseConfirm/>
        </Route>
        
        <Route path="/useprevent">
          <UsePrevent/>
        </Route>

        <Route path="/usepageleave">
          <UsePageLeave/>
        </Route>

        <Route path="/usefadein">
          <UseFadeIn/>
        </Route>

        <Route path="/usenetwork">
          <UseNetwork/>
        </Route>
        
        <Route path="/usescroll">
          <UseScroll/>
        </Route>

        <Route path="/usefullscreen">
          <UseFullScreen/>
        </Route>

        <Route path="/useaxios">
          <UseAxios/>
        </Route>

        <Route path="/usenotification">
          <UseNotification/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;

import { createRoot } from "react-dom/client";
import { Provider} from "react-redux";
import AppStore from "./utils/appstore";
import App from "./App";
import "./output.css";

const Container = document.getElementById("root");
const Root = createRoot(Container);
{console.log(AppStore.getState())}
Root.render(
  <Provider store={AppStore}>
    <App />
  </Provider>
);

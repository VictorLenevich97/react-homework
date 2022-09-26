import { Provider } from "react-redux";
import "./App.css";
import { Form } from "./Form/Form";
import { Orders } from "./Orders/Orders";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app_container">
        <Form />
        <Orders />
      </div>
    </Provider>
  );
}

export default App;

import AppNavigator from "./navigation/AppNavigator";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <div className="bg-background-secondary h-full">
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </div>
  );
}

export default App;

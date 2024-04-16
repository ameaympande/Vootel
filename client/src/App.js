import AppNavigator from "./navigation/AppNavigator";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-background-secondary h-full">
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <AppNavigator />
      </Provider>
    </div>
  );
}

export default App;

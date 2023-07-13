import "./App.css";
import Home from "./components/Home";
import TodoReducer  from "./contextapi/store";

function App() {
  return (
    <div className="App">
      <TodoReducer>
        <Home />
      </TodoReducer>
    </div>
  );
}

export default App;

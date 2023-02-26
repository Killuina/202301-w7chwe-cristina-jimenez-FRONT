import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Login />
    </div>
  );
};

export default App;

import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Body from "./main/body/Body";
import Footer from "./main/footer/Footer";
import Header from "./main/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
      <Dashboard />
      <Body/>
      </div>
      <Footer/>

    </div>
  );
}

export default App;

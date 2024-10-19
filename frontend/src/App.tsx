import "./App.css";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  return (
    <> 
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-600 to-green-400">
      <Header></Header>
      <MainBody></MainBody>
      </div>
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Manager />
      <Footer />
    </div>
  );
}

export default App;

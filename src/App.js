import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./Components/AddTask/AddTask";
import Footer from "./Components/Footer/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Tasklist } from "./Components/Tasklist/Tasklist";

function App() {
  return (
    <div className="App">
      <AddTask /> <br /> <br />
      <Tasklist />
      <Footer />
    </div>
  );
}

export default App;

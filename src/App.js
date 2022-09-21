import {Link, Route, Routes} from "react-router-dom"
import CreateEmployee from "./components/employee/createEmployee/CreateEmployee";
import ListEmployee from './components/employee/listEmployee/ListEmployee';
import Home from './components/home/Home';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employee">Employee List</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employee" element={<ListEmployee/>}/>
        <Route path="/add-employee" element={<CreateEmployee/>}/>
      </Routes>
    </>
  );
}

export default App;

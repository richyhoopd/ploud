import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"
import TableroAlumno from './Pages/TableroAlumno';
import TableroMaestro from './Pages/TableroMaestro';
import AdminRoute from "./Components/AdminRoute";

function App() {
  return (
   <BrowserRouter >
   <div className="App">
   <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/iniciar" element={<Login />} />
     <Route path="/registro" element={<Signup />} />
     <Route path="/tablero" element={<TableroAlumno />} />
     <Route
            path="/profe/tablero"
            element={
              <AdminRoute>
                <TableroMaestro/>
              </AdminRoute>
            }
          ></Route>
     </Routes>
     <Footer/>
    </div>
   </BrowserRouter>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import 'react-circular-progressbar/dist/styles.css';


function App() {
  return (
    <div className="">
      <Navbar />


      <Routes>
        <Route path='' element={<Home />}>


        </Route>


      </Routes>
    </div>
  );
}

export default App;

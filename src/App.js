import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Log from './Pages/Log/Log';
import Logger from './Pages/Logger/Logger';
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/logger' element={<Logger />} />
            <Route path='/log' element={<Log />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Main from './main/Main';
import Home from './home/Home'
import {Routes, Route} from 'react-router-dom';
import InsertMovie from './insert/InsertMovie'
import DetailMovie from './detail/DetailMovie'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/main' element={<Main/>} />
      <Route path='/insert' element={<InsertMovie/>} />
      <Route path='/detail' element={<DetailMovie/>} />
      </Routes>
    </div>
  );
}

export default App;

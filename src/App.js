
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar/Sidebar';
import Header from './pages/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import Statics from './pages/Statics/Statics';
function App() {
  return (
    <div className="App">
      <div className='sidebar'>
      <Sidebar/>
      </div>

<div className='routes'>
  <Header/>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/statistic' element={<Statics/>}/>
  </Routes>
</div>
    </div>
  );
}

export default App;

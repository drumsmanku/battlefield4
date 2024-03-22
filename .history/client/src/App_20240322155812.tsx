import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './components/Soldier/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
      <div className='App'>
      <Router>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>  
  )
}

export default App

import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './components/Soldier/MainPage';


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

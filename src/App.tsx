import HomePage from '../pages/HomePage'
import ViewMorePage from '../pages/ViewMorePage'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country-details/:name" element={<ViewMorePage />} />
      </Routes>
    </Router>
  
      
    </div>
  )
}

export default App

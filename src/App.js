import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cartpage' element={<CartPage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

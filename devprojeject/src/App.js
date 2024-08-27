import { BrowserRouter,Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Home from "./Component/Home"

function App() {

  <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  return (
    <>
    <Home/>
    </>
  )
}

export default App;

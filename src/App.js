
import Home from './router/Home/Home';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navigation from './router/navigation/Navigation';
import Signin from './router/signin/Signin';



const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<p>hello</p>} />
        <Route path="signin" element={<Signin/>} />
      </Route>

    </Routes>

  );
}

export default App;

import Home from './routes/home/home.component.jsx';
import SingIn from './routes/sign-in/sing-in.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import { Route, Routes } from 'react-router';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;

import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.conponent'
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> }/> 
        {/* index is an attribute, and is actually index={true},
        it tells the route, when you match just the "/", then this route should be Home component*/}
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;

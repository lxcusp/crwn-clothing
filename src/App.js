import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.conponent'
import Navigation from './routes/navigation/navigation.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> }/> 
        {/* index is an attribute, and is actually index={true},
        it tells the route, when you match just the "/", then this route should be Home component*/}
      </Route>
    </Routes>
  )
};

export default App;

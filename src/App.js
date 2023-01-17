import Home from './routes/home/home.conponent'
import { Routes, Route, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navi Bar</h1>
      </div>
      <Outlet />
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
      </Route>
    </Routes>
  )
};

export default App;

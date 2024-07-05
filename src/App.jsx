import React from 'react'
import 
{
  Route,
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'
import HomePage from './Pages/Home.page';
import NavbarLayout from './layouts/Navbar.layout'; // layout is one elemtn which have to show in all pages 
import JobsPage from './Pages/Jobs.page';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<NavbarLayout/>}>
  <Route index element={<HomePage/>} />
  <Route path='/jobs' element={<JobsPage/>} />
  </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
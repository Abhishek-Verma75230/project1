import { useState } from 'react';

import Login from './components/accounts/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';

import Createpost from './components/create/Createpost';




const PrivateRoute = ({ isAuthenticated, ...props }) => {
  // const token = sessionStorage.getItem('accessToken');
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
};






function App() {

  const [isAuthenticated, isuserAuthenticated] = useState(false);



  return (



    <DataProvider>
      <BrowserRouter>
        {/* <Header/> */}
        <div >
          <Routes>
            <Route path='/login' element={<Login isuserAuthenticated={isuserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >

              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >

              <Route path='/create' element={< Createpost />} />
            </Route>
            
            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >

              <Route path='/details/:id' element={< DetailView />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >

           <Route path='/update/:id' element={< Update />} />
           </Route>




          </Routes>

        </div>

      </BrowserRouter>
    </DataProvider>
  );
}

export default App;









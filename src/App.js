import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/courses',
          element:<Courses></Courses>
        },
        {
          path:'/faq',
          element:<FAQ></FAQ>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/*',
          element:<PageNotFound></PageNotFound>
        }
      ],
      
    }
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

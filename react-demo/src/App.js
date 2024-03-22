import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout'
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import About from './components/about/About';


function App(){
  //create browser router object
  const browserRouter = createBrowserRouter([
    //routing configuration
    {
      path:'',
      element:<RootLayout />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path:'signup',
          element:<Signup />
        },
        {
          path:'signin',
          element:<Signin />
        },
        {
          path:'about',
          element:<About />
        }
      ]
    }
  ])


  //REACT component can return only one element
  return (
    <div>
      {/*providing browser router to application */}
      <RouterProvider router = {browserRouter} />
      

    </div>
  );
}

export default App;


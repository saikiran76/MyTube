import './App.css';
import Header from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/watchPage';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  },

])

function App() {

  return (
    <Provider store ={store}>
      <div className="App dark">
          <Header/>
        <RouterProvider router={appRouter} >
          <Body/>
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;

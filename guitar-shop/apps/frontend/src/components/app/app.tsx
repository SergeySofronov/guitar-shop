import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<p>Hello!</p>} />
))

function App(): JSX.Element {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

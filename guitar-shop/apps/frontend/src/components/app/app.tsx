import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AppRoute } from '../../const';
import Catalog from '../../pages/catalog/catalog';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={AppRoute.Catalog} element={<Catalog products={[]} />} />
))

function App(): JSX.Element {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

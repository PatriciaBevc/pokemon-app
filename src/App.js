import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Error';
import PokemonInfo from './components/PokemonInfo';
import PokemonList from './components/PokemonList';
import RootLayout from './components/Root';
import MyFavorites from './components/MyFavorites';
import './styling/styles.scss';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <PokemonList /> },
        { path: '/pokemon/:name', element: <PokemonInfo /> },
        { path: '/my-favorites', element: <MyFavorites /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} >
    </RouterProvider>
  );
};

export default App;

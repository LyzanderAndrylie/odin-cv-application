import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateCVPage, WelcomePage } from './pages';
import { ThemeProvider } from './theme';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <WelcomePage />,
    },
    {
      path: '/create',
      element: <CreateCVPage />,
    },
  ],
  {
    basename: '/odin-cv-application/',
  },
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

import { 
  createRouter, 
  createRoute, 
  createRootRoute, 
  RouterProvider, 
  Outlet 
} from '@tanstack/react-router';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect } from 'react';

// Root Route
const rootRoute = createRootRoute({
  component: () => {
    // Scroll to top on route change
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <Toaster 
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#000',
              color: '#C9A24D',
              border: '1px solid #C9A24D',
              borderRadius: '0',
              fontFamily: 'Cinzel, serif',
              textTransform: 'uppercase',
              fontSize: '12px',
              letterSpacing: '0.1em'
            }
          }}
        />
      </div>
    );
  },
});

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  projectsRoute,
  aboutRoute,
  contactRoute,
]);

// Router
const router = createRouter({ routeTree });

// Type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

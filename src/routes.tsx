import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
    visible: true
  },
  {
    name: 'About',
    path: '/about',
    element: <AboutPage />,
    visible: true
  },
  {
    name: 'Products',
    path: '/products',
    element: <ProductsPage />,
    visible: true
  },
  {
    name: 'Product Detail',
    path: '/products/:id',
    element: <ProductDetailPage />,
    visible: false
  },
  {
    name: 'Gallery',
    path: '/gallery',
    element: <GalleryPage />,
    visible: true
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <ContactPage />,
    visible: true
  }
];

export default routes;

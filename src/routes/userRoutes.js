import ArticlesPage from 'pages/ArticlesPage';
import ArticlePage from 'pages/ArticlePage';
import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';

export default [
  {
    path: '/article/:id',
    component: ArticlePage
  },
  {
    path: '/articles',
    component: ArticlesPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/contact',
    component: ContactPage
  },
  { redirect: true, path: '/', to: '/articles', navbarName: 'Redirect' }
];

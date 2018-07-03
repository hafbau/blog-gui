import ArticlesPage from 'pages/ArticlesPage';
import ArticlePage from 'pages/ArticlePage';

export default [
  {
    path: '/articles/:id',
    component: ArticlePage
  },
  {
    path: '/articles',
    component: ArticlesPage
  },
  { redirect: true, path: '/', to: '/articles', navbarName: 'Redirect' }
];

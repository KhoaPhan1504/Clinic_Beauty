import About from '../views/pages/About/About';
import Gallery from '../views/pages/Gallery/Gallery';
import Home1 from '../views/pages/Home/Home1/Home1';
import Home2 from '../views/pages/Home/Home2/Home2';
import Service from '../views/pages/Service/Service';
import Team from '../views/pages/Team/Team';
import NotFound from '../views/pages/Errors/NotFound';

export const routes = [
  {
    path: '/',
    page: Home1,
  },
  {
    path: '/home2',
    page: Home2,
  },
  {
    path: '/about',
    page: About,
  },
  {
    path: '/service',
    page: Service,
  },
  {
    path: '/gallery',
    page: Gallery,
  },
  {
    path: '/team',
    page: Team,
  },
  {
    path: '*',
    page: NotFound,
  },
];

import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritesPage from '@containers/FavoritesPage';
import SearchPage from '@containers/SearchPage';
import ErrorPage from '@containers/ErrorPage';


const routesConfig = [
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/people",
        element: <PeoplePage/>
    },
    {
        path: "/people/:id",
        element: <PersonPage/>
    },
    {
        path: "/search",
        element: <SearchPage/>
    },
    {
        path: "/not-found",
        element: <NotFoundPage/>
    },
    {
        path: "/favorites",
        element: <FavoritesPage/>
    },
    {
        path: "/fail",
        element: <ErrorPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]
export default routesConfig
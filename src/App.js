import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import RQSuperHero from "./components/RQSuperHero.page";
import DynamicParallel from "./components/DynamicParallel.page";
import PaginatedQueries from "./components/PaginatedQueries.page";
import InfiniteQueries from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/super-heroes">Traditional Super Heroes</Link>
      </li>
      <li>
        <Link to="/rq-super-heroes">RQ Super Heroes</Link>
      </li>
    </ul>
  </nav>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/rq-infinite">
              <InfiniteQueries />
            </Route>
            <Route path="/rq-paginated">
              <PaginatedQueries />
            </Route>
            <Route path="/rq-dynamic-parallel">
              <DynamicParallel heroIds={[1, 4, 6]} />
            </Route>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHero />
            </Route>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

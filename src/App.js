import { Blog, BlogList, Cv, KeywordSearch, Logo, Tagged } from './components/';
import tagged from './tagged.json';
import blogs from './blogs.json';
import { Route, Switch } from 'react-router-dom';

function App() {
  blogs.sort(function (a, b) {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
  });
  return (
    <>
      <Logo />
      <KeywordSearch />
      <Switch>
        <Route path='/' component={BlogList} exact />
        <Route path='/cv' component={Cv} exact />
        {blogs.map((blog, index) => (
          <Route path={`/:name`} component={Blog} exact key={index} />
        ))}
        {tagged.map((tag, index) => (
          <Route path={`/tagged/:name`} component={Tagged} key={index} />
        ))}
      </Switch>
    </>
  );
}

export default App;

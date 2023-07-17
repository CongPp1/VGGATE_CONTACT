import { BackTop } from 'antd';
import Home from './containers/Home';
import { Route, Routes } from 'react-router-dom';
import { path } from './utils/constant.js'
import Review from './containers/Review';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={path.CONTACT} element={<Home />} />
          <Route path={path.REVIEW} element={<Review />} />
        </Routes>
      <BackTop />
    </div>
  );
}

export default App;

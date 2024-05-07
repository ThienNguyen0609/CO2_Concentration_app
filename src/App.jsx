import './App.scss'

import Router from './routes/Router';

export default function App() {
  return (
    <>
      <div className="my-container">
        <div className="inner">
          <Router />
        </div>
      </div>
    </>
  );
}

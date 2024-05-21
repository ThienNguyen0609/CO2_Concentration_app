import './App.scss'

import Router from './routes/Router';
import { useSelector } from 'react-redux';

export default function App() {
  const mode = useSelector((state) => state.mode.light)
  return (
    <>
      <div className={"my-container"+(mode ? " light-mode" : " dark-mode")}>
        <div className="inner">
          <Router />
        </div>
      </div>
    </>
  );
}

import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import { router } from './Routes/Routers/Route';

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

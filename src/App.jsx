import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { UnicornProvider } from './contexts/UnicornContext';
import UnicornModule from './modules/unicorns';
import ProductsModule from './modules/products';

function App() {
  return (
    <div className="min-h-screen bg-indigo-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/unicornios/*"
            element={
              <UnicornProvider>
                <UnicornModule />
              </UnicornProvider>
            }
          />
          <Route path="/productos/*" element={<ProductsModule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

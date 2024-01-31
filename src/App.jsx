import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import './App.css'
import ErrorBoundary from './ErrorBoundary.jsx';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home.jsx'))
const Inventory = lazy(() => import('./pages/Inventory.jsx'))
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <Navbar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>

          <Route path="*" element={
            <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
              <Home />
            </ErrorBoundary>} />

          <Route path="/inventory" element={
            <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
              <Inventory />
            </ErrorBoundary>
          } />

          {/* <Route path="/" element={<Tools />} /> */}

        </Routes>
      </Suspense>

    </QueryClientProvider>
  )
}
export default App



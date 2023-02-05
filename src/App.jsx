import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './pages/HomePage/HomePage';
import CreateProductPage from './pages/CreateProductPage/CreateProductPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="menu">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateProductPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

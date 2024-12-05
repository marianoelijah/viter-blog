import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/pages/frontend/homepage/Homepage';
import Single from './components/pages/frontend/single/Single';
import Blog from './components/pages/backend/blog/Blog';
import { StoreProvider } from './components/store/storeContext';
import Category from './components/pages/backend/category/Category';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
       <Router>
        <Routes>
         <Route index element={<Homepage />} />
         <Route path="/single" element={<Single />} />
         <Route path="/admin/blog" element={<Blog />} />
         <Route path="/admin/category" element={<Category />} />
       </Routes>
    </Router>
    </StoreProvider>
    </QueryClientProvider>
    
      
    
    
   
  )
}

export default App

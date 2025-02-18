import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import WritingPage from './pages/WritingPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

const router = createBrowserRouter(
 createRoutesFromElements(
   <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="writing" element={<WritingPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="blog/:id" element={<BlogPage />} />
   </Route>
 ), 
 { basename: '/domblog' } // Ensure the leading slash is included
);

function App() {
 return <RouterProvider router={router} />;
}

export default App;

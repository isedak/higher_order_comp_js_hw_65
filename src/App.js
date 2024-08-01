import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import AboutPage from './containers/AboutPage/AboutPage';
import ContactsPage from './containers/ContactsPage/ContactsPage';
import HomePage from './containers/HomePage/HomePage';
import AddPage from './containers/AddPage/AddPage';
import PostDetailsPage from './containers/PostDetailsPage/PostDetailsPage';
import EditPage from './containers/EditPage/EditPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts' element={<HomePage />}>
            <Route path='add' element={<AddPage />} />
            <Route path=':id' element={<PostDetailsPage />}>
              <Route path='edit' element={<EditPage />} />
            </Route>
          </Route>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

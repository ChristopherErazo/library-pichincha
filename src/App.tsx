import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './App.css'
import { Layout } from './components/template/template'
import { Home } from './components/page/home/home'
import { Register } from './components/page/register'
import { SignIn } from './components/page/sign-in'
import { NotFound } from './components/page/not-found'
import { DataProvider } from './context/use-context/use-context'
import { DetailBook } from './components/page/detail-book/detail-book'

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/newbook" element={<Register />} />
            <Route path="/book/*" element={<DetailBook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App

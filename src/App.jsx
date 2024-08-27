import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MenuBar from './components/MenuBar'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import PdfToExcel from './components/PdfToExcel'
import ToolCards from './components/ToolCards'
import SplitPdf from './components/SplitPdf'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './AuthContext'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <MenuBar />
          <Routes>
            <Route path="/" element={<ToolCards />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:post_id" element={<BlogPost />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pdf-to-excel" element={<PdfToExcel />} />
              <Route path="/split-pdf" element={<SplitPdf />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Main } from "./pages/main/main"
import { Login } from "./pages/login"
import { Navbar } from "./components/navbar"
import { Error } from "./pages/error"
import { CreatePost } from "./pages/create-post/create-post"

export function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="./create-post.tsx" element={<CreatePost />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

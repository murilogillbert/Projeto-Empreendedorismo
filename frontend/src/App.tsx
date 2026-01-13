import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layouts/MainLayout"
import Home from "./pages/consumer/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/layouts/MainLayout"
import Home from "./pages/consumer/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* Add other routes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

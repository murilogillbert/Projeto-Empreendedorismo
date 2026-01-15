import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConsumerMapDiscovery } from './pages/ConsumerMapDiscovery';
import { RestaurantMenu } from './pages/RestaurantMenu';
import { ReservationType } from './pages/ReservationType';
import { OrderSummary } from './pages/OrderSummary';
import { SessionOrders } from './pages/SessionOrders';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminMenuEditor } from './pages/AdminMenuEditor';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConsumerMapDiscovery />} />
        <Route path="/menu" element={<RestaurantMenu />} />
        <Route path="/reservation" element={<ReservationType />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/menu" element={<AdminMenuEditor />} />

        {/* Protected Routes */}
        <Route path="/sessions" element={
          <ProtectedRoute>
            <SessionOrders />
          </ProtectedRoute>
        } />
        <Route path="/saved" element={
          <ProtectedRoute>
            <ConsumerMapDiscovery />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ConsumerMapDiscovery />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

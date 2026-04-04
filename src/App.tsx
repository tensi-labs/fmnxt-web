import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { CartPage } from './pages/cart/CartPage'
import { CourseDetailPage } from './pages/courses/CourseDetailPage'
import { CoursesPage } from './pages/courses/CoursesPage'
import { DashboardPage } from './pages/dashboard/DashboardPage'
import { HomePage } from './pages/home/HomePage'
import { LibraryPage } from './pages/library/LibraryPage'
import { LoginPage } from './pages/login/LoginPage'
import { PlaceholderPage } from './pages/placeholder/PlaceholderPage'

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<PlaceholderPage title="Sign up" />} />
        <Route path="/subscribe" element={<PlaceholderPage title="Subscribe" />} />
        <Route
          path="/corporates"
          element={<PlaceholderPage title="FMNXT for Corporates" description="Corporate learning and partnerships." />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<HomePage />} />
        <Route element={<CategoryPage />} path="category/:slug" />
        <Route element={<ProductDetails />} path="product/:productId" />
      </Route>
    </Routes>
  )
}

export default App

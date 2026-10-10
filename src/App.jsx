import AppRoutes from './routes/AppRoutes'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  )
}

export default App
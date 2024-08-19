import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar/PortfolioNavbar"
import PortfolioPage from "./pages/mainPage/PortfolioPage"
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail"
import Error from "./pages/404/Error"
function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PortfolioPage />}/>
          <Route path="/project/details/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </main>
    </>
  )
}

export default App

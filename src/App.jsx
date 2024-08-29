import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar/PortfolioNavbar"
import PortfolioPage from "./pages/mainPage/PortfolioPage"
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail"
import Error from "./pages/404/Error"
import AllProject from "./pages/projects/AllProject"
import WebProject from "./pages/projects/WebProject"
import AndroidProject from "./pages/projects/AndroidProject"
import Footer from "./pages/footer/Footer"
function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PortfolioPage />}>
              <Route path="" element={<AllProject />} />
              <Route path="webProject" element={<WebProject />} />
              <Route path="androidProject" element={<AndroidProject />} />
          </Route>
          <Route path="/project/details/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

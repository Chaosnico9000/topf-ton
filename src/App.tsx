import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import HomePage from "@/pages/HomePage"
import Impressum from "@/pages/Impressum"
import Datenschutz from "@/pages/Datenschutz"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#fdf5ee",
            border: "1px solid #e8c9a8",
            color: "#5c2d0e",
            fontFamily: "'Lato', sans-serif",
          },
        }}
        richColors
      />
    </BrowserRouter>
  )
}

export default App

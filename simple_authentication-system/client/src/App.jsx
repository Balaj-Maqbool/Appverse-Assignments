import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<div className="text-5xl font-bold absolute  left-[50%] top-[50%] -translate-x-[50%] ">PAGE NOT FOUND!!</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import Navbar from "./Navbar";
import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/work" element={<Home/>} />
					<Route path="/about" element={<About/>} />
					<Route path="/contact" element={<Contact/>} />
				</Routes>
			</div>
		</>
	)
}

export default App;

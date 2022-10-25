import Navbar from "./Navbar";
import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
	console.log(window.location)

	switch (window.location.pathname) {
		case "/":
			component = <Home />
			break
		case "/work":
			component = <Work />
			break
		case "about":
			component = <About />
			break
		case "/contact":
			component = <Contact />
			break
	}
	return (
		<>
			<Navbar/>
			<div className="container">
				{component}
			</div>
		</>
	)
}

export default App;

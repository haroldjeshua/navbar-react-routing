export default function Navbar() {
	return <nav className="nav">
		<a href="/" className="site-title">Site Name</a>
		<ul>
			<CustomLink href="/work">Work</CustomLink>
			<CustomLink href="/about">About</CustomLink>
			<CustomLink href="/contat">Contact</CustomLink>
		</ul>
	</nav>
}

function CustomLink({ href, children, ...props }) {
	return (
		<li>
			<a href="/work">Work</a>
		</li>
	)
}
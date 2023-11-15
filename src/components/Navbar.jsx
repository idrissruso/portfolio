import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
  return (
    <div className="flex justify-stretch items-center gap-12">
      <Label />
      <NavItems />
    </div>
  )
}

function Label() {
  return (
    <h1 className="text-3xl font-bold">
      <span>Ruso</span>
      <span className="text-green-500">Code</span>
    </h1>
  )
}

function NavItems() {
  return (
    <ul className="flex gap-4">
      <Item name="Home" link="home" />
      <Item name="About" link="about" />
      <Item name="Skills" link="skills" />
      <Item name="Projects" link="projects" />
    </ul>
  )
}

function Item({ name, link }) {
  return (
    <li className="text-lg cursor-pointer hover:text-green-500 transition-all duration-300">
      <Link to={link} smooth={true} duration={500}>
        {name}
      </Link>
    </li>
  )
}

export default Navbar

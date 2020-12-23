import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/concept'>
          <a>Concept</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav

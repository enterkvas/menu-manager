import { Link } from 'react-router-dom'

export function MenusPage() {
  return (
    <div>
      <h1>Menus Page</h1>

      <ul>
        <li>
          <Link to="/menus/1">Open Menu 1</Link>
        </li>

        <li>
          <Link to="/menus/2">Open Menu 2</Link>
        </li>
      </ul>

      <Link to="/login">Go to Login</Link>
    </div>
  )
}
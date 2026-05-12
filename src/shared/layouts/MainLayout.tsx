import { Link, Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div>
      <header
        style={{
          padding: '16px',
          borderBottom: '1px solid #ccc',
          display: 'flex',
          gap: '16px',
        }}
      >
        <Link to="/">Menus</Link>

        <Link to="/login">Login</Link>
      </header>

      <main style={{ padding: '16px' }}>
        <Outlet />
      </main>
    </div>
  )
}
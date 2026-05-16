import { Link } from 'react-router-dom'

import type { Menu } from './types'

type Props = {
  menu: Menu
}

export function MenuCard({ menu }: Props) {
  return (
    <Link
      to={`/menus/${menu.id}`}
      style={{
        display: 'block',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        textDecoration: 'none',
        color: 'white',
      }}
    >
      <h2>{menu.name}</h2>

      <p>{menu.description}</p>
    </Link>
  )
}
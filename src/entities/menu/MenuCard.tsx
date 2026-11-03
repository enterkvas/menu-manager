import type { Menu } from './types'
import { Link } from 'react-router-dom'

type Props = {
  menu: Menu
  onDelete: (id: string) => void
}

export function MenuCard({
    menu,
    onDelete
}: Props) {
  return (
    <div
      style={{
        display: 'block',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '12px',
      }}
    >
      <Link
        to={`/menus/${menu.id}`}
        style={{
          display: 'block',
          textDecoration: 'none',
          color: 'white',
        }}
      >
        <h2 className="text-xl font-semibold">{menu.name}</h2>
        <p>{menu.description}</p>
      </Link>

      <button
        type="button"
        onClick={() => onDelete(menu.id)}
      >
        Delete
      </button>
    </div>
  )
}
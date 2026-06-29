import type { Menu } from './types'

type Props = {
  menu: Menu
}

export function MenuCard({ menu }: Props) {
  return (
    <div
      style={{
        display: 'block',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '12px',
      }}
    >      
        <h2>{menu.name}</h2>

        <p>{menu.description}</p>      

    </div>
  )
}
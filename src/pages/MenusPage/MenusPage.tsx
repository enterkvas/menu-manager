import { MenuCard } from '@/entities/menu/MenuCard'
import { menus } from '@/entities/menu/mockData'

export function MenusPage() {
  return (
    <div>
      <h1>Menus</h1>

      <div
        style={{
          display: 'grid',
          gap: '16px',
          marginTop: '24px',
        }}
      >
        {menus.map(menu => (
          <MenuCard
            key={menu.id}
            menu={menu}
          />
        ))}
      </div>
    </div>
  )
}
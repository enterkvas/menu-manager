import { useState, useRef } from 'react'
import { MenuCard } from '@/entities/menu/MenuCard'
import { useMenus } from '@/entities/menu/model/useMenus'
import CreateMenuButton from '@/features/create-menu/ui/CreateMenuButton'
import CreateMenuModal from '@/features/create-menu/ui/CreateMenuModal'
import { Link } from 'react-router-dom'

export function MenusPage() {
  const { menus, createMenu } = useMenus()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const createButtonRef =
  useRef<HTMLButtonElement>(null)  

  const handleCloseModal = () => {
    setIsCreateModalOpen(false)
    
    createButtonRef.current?.focus()
  }

  return (
    <div>
      <h1>Menus</h1>

      <CreateMenuButton
        buttonRef={createButtonRef}
        onClick={() => setIsCreateModalOpen(true)}
      />

      <div
        style={{
          display: 'grid',
          gap: '16px',
          marginTop: '24px',
        }}
      >
        {menus.map(menu => (
          <Link 
            key={menu.id}
            to={`/menus/${menu.id}`} 
            style={{ 
              display: 'block',
              textDecoration: 'none', 
              color: 'white',
            }}
          >
            <MenuCard menu={menu} />
          </Link>
        ))}
      </div>
      {isCreateModalOpen && (
        <CreateMenuModal 
          onClose={handleCloseModal}
          onCreateMenu={createMenu}
        />
      )}
    </div>
  )
}
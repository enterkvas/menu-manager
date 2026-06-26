import { useState, useRef } from 'react'
import { MenuCard } from '@/entities/menu/MenuCard'
import { useMenus } from '@/entities/menu/model/useMenus'
import CreateMenuButton from '@/features/create-menu/ui/CreateMenuButton'
import CreateMenuModal from '@/features/create-menu/ui/CreateMenuModal'

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
          <MenuCard
            key={menu.id}
            menu={menu}
          />
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
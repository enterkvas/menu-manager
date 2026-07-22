import { useParams } from 'react-router-dom'
import { useMenus } from '@/entities/menu/model/useMenus'
import { MenuEditor } from '@/features/menu-editor/ui/MenuEditor'
import type { UpdateMenuData } from '@/entities/menu/types'

export function MenuEditorPage() {
  const { menuId } = useParams()

  const { menus, updateMenu } = useMenus()

  const menu = menus.find((menu) => menu.id === menuId) 
  
  if (!menu) {
    return <p>Menu not found</p>
  }

  const currentMenu = menu

  function onSave(changes: UpdateMenuData) {
    updateMenu(currentMenu.id, changes)
  }

  return (
    <MenuEditor
        menu={menu}
        onSave={onSave}
    />
  )
}
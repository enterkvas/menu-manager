import { useNavigate, useParams } from 'react-router-dom'
import { useMenus } from '@/entities/menu/model/useMenus'
import { MenuEditor } from '@/features/menu-editor/ui/MenuEditor'
import type { UpdateMenuData } from '@/entities/menu/types'

export function MenuEditorPage() {
  const { menuId } = useParams()

  const { menus, updateMenu } = useMenus()

  const navigate = useNavigate()

  const menu = menus.find((menu) => menu.id === menuId) 
  
  if (!menu) {
    return <p>Menu not found</p>
  }

  const currentMenu = menu

  function onSave(changes: UpdateMenuData) {
    updateMenu(currentMenu.id, changes)
  }

  function onCancel(isDirty: boolean) {
    if(isDirty) {
      const shouldDiscard = window.confirm(
        "You have unsaved changes. Leave without saving?"
      )
      if (!shouldDiscard) {
        return
      }
    }
    navigate("/")
  }

  return (
    <MenuEditor
      menu={menu}
      onSave={onSave}
      onCancel={onCancel}
    />
  )
}
import { useParams } from 'react-router-dom'
import { useMenus } from '@/entities/menu/model/useMenus'
import { MenuEditor } from '@/features/menu-editor/ui/MenuEditor'

export function MenuEditorPage() {
  const { menuId } = useParams()

  const { menus } = useMenus()

  const menu = menus.find((menu) => menu.id === menuId) 
  
  if (!menu) {
    return <p>Menu not found</p>
  }

  return (
    <MenuEditor menu={menu} />
  )
}
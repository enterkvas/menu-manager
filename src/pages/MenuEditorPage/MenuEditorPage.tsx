import { useParams } from 'react-router-dom'

export function MenuEditorPage() {
  const { menuId } = useParams()

  return (
    <div>
      <h1>Menu Editor Page</h1>

      <p>Menu ID: {menuId}</p>
    </div>
  )
}
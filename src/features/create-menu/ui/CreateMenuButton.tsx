type CreateMenuButtonProps = {
  onClick: () => void
}

export default function CreateMenuButton({
  onClick,
}: CreateMenuButtonProps) {
  return (
    <button onClick={onClick}>
      Create Menu
    </button>
  )
}
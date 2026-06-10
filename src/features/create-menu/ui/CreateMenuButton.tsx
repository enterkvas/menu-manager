type CreateMenuButtonProps = {
  onClick: () => void
  buttonRef: React.RefObject<HTMLButtonElement | null>
}

export default function CreateMenuButton({
  onClick,
  buttonRef,
}: CreateMenuButtonProps) {  
  return (
    <button
      ref={buttonRef} 
      onClick={onClick}
    >
      Create Menu
    </button>
  )
}
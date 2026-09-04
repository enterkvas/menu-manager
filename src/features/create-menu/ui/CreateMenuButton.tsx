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
      className="
        rounded-md
        border-2
        border-gray-500
        px-4
        py-2
        text-sm
        font-medium
        transition-colors
        hover:bg-gray-100
        focus:outline-none
        focus:ring-2
        focus:ring-gray-400
        focus:ring-offset-2
      "
      ref={buttonRef} 
      onClick={onClick}
    >
      Create Menu
    </button>
  )
}
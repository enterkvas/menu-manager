import { useEffect, type ReactNode } from "react"

type ModalProps = {
    children: ReactNode
    onClose: () => void 
}

export function Modal({
    children,
    onClose,
}: ModalProps) {

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose])
    
    return (
        <div 
            className="
                fixed inset-0 z-50 
                flex items-center justify-center
                bg-black/40    
            "
            onClick={onClose}
        >
            <div 
                className="
                    relative
                    w-full max-w-md
                    rounded-lg
                    bg-white
                    p-6
                    shadow-lg
                "
                onClick={(e) => e.stopPropagation()} 
            >
                {children}

                <button
                    type="button"
                    onClick={onClose}
                    className="
                        absolute
                        right-3
                        top-3

                        flex
                        h-8
                        w-8
                        items-center
                        justify-center

                        rounded-md

                        text-xl
                        
                        text-gray-500
                        transition-colors

                        hover:bg-gray-100
                        hover:text-gray-700
                    "
                    >
                    ×
                    </button>
            </div>
        </div>
    )
}
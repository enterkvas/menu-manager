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
                    className="
                    mt-4
                    rounded-md
                    bg-blue-500
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition-colors
                    hover:bg-blue-600
                    "
                    onClick={onClose}                    
                >
                    Close
                </button>
            </div>
        </div>
    )
}
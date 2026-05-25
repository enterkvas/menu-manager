import CreateMenuForm from "./CreateMenuForm"

type CreateModalProps = {
    onClose: () => void
    onCreateMenu: (name: string, description: string) => void
}

export default function CreateMenuModal({ 
    onClose,
    onCreateMenu,
}: CreateModalProps) {
    return ( 
        <div 
            className="
                fixed inset-0 z-50 
                flex items-center justify-center
                bg-black/40    
            "
        >
            <div 
                className="
                    w-full max-w-md
                    rounded-lg
                    bg-white
                    p-6
                    shadow-lg" 
            >
                <h2 className="text-2xl font-bold text-black">
                    Create Menu
                </h2>

                <CreateMenuForm
                    onCreateMenu={onCreateMenu}
                />

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
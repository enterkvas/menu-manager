import CreateMenuForm from "./CreateMenuForm"
import { Modal } from '@/shared/ui/modal/Modal'

type CreateModalProps = {
    onClose: () => void
    onCreateMenu: (name: string, description: string) => void
}

export default function CreateMenuModal({ 
    onClose,
    onCreateMenu,
}: CreateModalProps) {        

    return ( 
        <Modal onClose={onClose}>
            <h2 className="text-xl font-bold text-black">
                Create Menu
            </h2>
            <CreateMenuForm onCreateMenu={onCreateMenu} onClose={onClose} />
        </Modal>        
    )
}
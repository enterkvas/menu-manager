import { Modal } from '@/shared/ui/modal/Modal';

type ConfirmationProps = {
    title: string
    description: string
    cancelLabel?: string
    confirmLabel?: string
    onConfirm: () => void
    onCancel: () => void
}

export function Confirmation({
    title,
    description,
    cancelLabel='Cancel',
    confirmLabel='Confirm',
    onCancel,
    onConfirm,
}: ConfirmationProps) {
    return (
        <Modal onClose={onCancel}
        >
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="mt-4 flex justify-center gap-4">
                <button
                    type="button"
                    onClick={onCancel}
                >
                    {cancelLabel}
                </button>

                <button
                    type="button"
                    onClick={onConfirm}
                >
                    {confirmLabel}
                </button>
            </div>
        </Modal>
    )
}

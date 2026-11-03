import { useEffect, useRef, useState } from "react"
import { fieldBaseStyles } from "@/shared/ui/styles/fieldStyles"

type CreateMenuFormProps = {
    onCreateMenu: (name: string, description: string) => void
    onClose: () => void
}

export default function CreateMenuForm({
    onCreateMenu,
    onClose,
}: CreateMenuFormProps) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [isNameTouched, setIsNameTouched] = useState(false)
    const [isDescriptionTouched, setIsDescriptionTouched] = useState(false) 
    const [isSubmitting, setIsSubmitting] =
    useState(false)
    const nameInputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        nameInputRef.current?.focus()
    }, [])

   const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        if (!isFormValid) {
            return
        }

        setIsSubmitting(true) 
        await new Promise((resolve) => setTimeout(resolve, 2000))  

        onCreateMenu(trimmedName, trimmedDescription)

        onClose()
        
        setName("")
        setDescription("")
        
        setIsSubmitting(false)
    }

    const trimmedName = name.trim()
    const trimmedDescription = description.trim()
    const nameError = trimmedName === "" ? "Menu name is required" : ""
    const descriptionError = trimmedDescription === "" ? "Description is required" : ""
    const isFormValid = !nameError && !descriptionError

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
                <div className="grid gap-1">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium"
                    >
                        Menu name
                    </label>

                    <input
                        ref={nameInputRef}                       
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter menu name"
                        className={`
                            ${fieldBaseStyles}

                            ${isNameTouched && nameError 
                                ? 'border-red-500' 
                                : 'border-gray-300'
                            }                           
                        `}                        
                        onBlur={() => setIsNameTouched(true)} 
                    />

                    {isNameTouched && nameError && (
                        <p className="text-sm text-red-500">
                            {nameError}
                        </p>
                    )}
                    
                </div>

                <div className="grid gap-1">
                    <label
                        htmlFor="description"
                        className="text-sm font-medium"
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        placeholder="Enter menu description"
                        className={`
                            ${fieldBaseStyles} 

                            ${isDescriptionTouched && descriptionError 
                                ? 'border-red-500' 
                                : 'border-gray-300'
                            }
                        `}
                        onBlur={() => setIsDescriptionTouched(true)}
                    />

                    {isDescriptionTouched &&
                    descriptionError && (
                        <p className="text-sm text-red-500">
                            {descriptionError}
                        </p>
                    )}
                    
                </div>

                <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="
                        justify-self-start
                        rounded-md
                        bg-gray-500
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        transition-colors

                        enabled:hover:bg-gray-600

                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                    >
                    {isSubmitting
                        ? 'Creating...'
                        : 'Submit'
                    }
                </button>

            </div>
        </form>
    )
}
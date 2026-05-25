import { useState } from "react"

type CreateMenuFormProps = {
    onCreateMenu: (name: string, description: string) => void
}

export default function CreateMenuForm({
    onCreateMenu,
}: CreateMenuFormProps) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

   const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        onCreateMenu(name, description)

        setName("")
        setDescription("")
    }

    return (
        <form 
            className="grid gap-2"
            onSubmit={handleSubmit}>
            <input
                className="
                border
                rounded-md
                px-4
                py-2
                text-sm"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="
                border
                rounded-md
                px-4
                py-2
                text-sm"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button 
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
                    hover:bg-gray-600
                "
                type="submit"
            >
               Submit
            </button>
        </form>                    
    )
}
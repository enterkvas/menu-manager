import { useState } from 'react'
import type { Menu, UpdateMenuData } from '@/entities/menu/types'
import { fieldBaseStyles } from '@/shared/ui/styles/fieldStyles'

type MenuEditorProps = {
    menu: Menu
    onSave: (changes: UpdateMenuData) => void
    onCancel: () => void
}

export function MenuEditor({ 
    menu,
    onSave,
    onCancel,
}: MenuEditorProps) {
    const [draft, setDraft] = useState(menu) 

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        onSave({
            name: draft.name,
            description: draft.description,
        })

    }

    const isDirty = 
        draft.name !== menu.name || 
        draft.description !== menu.description 

    return (
        <div className="mx-auto max-w-xl">
            <h1 className="mb-6 text-2xl font-semibold">
                Edit menu
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <label 
                            htmlFor="name"
                            className="text-sm font-medium"
                        >
                            Menu name
                        </label>
                        <input 
                            id="name"
                            type="text"
                            value={draft.name}
                            onChange={(e) => {
                                setDraft({
                                    ...draft,
                                    name: e.target.value
                                })
                            }}
                            className={fieldBaseStyles} 
                        /> 
                    </div>

                    <div className="grid gap-2"> 
                        <label 
                            htmlFor="description"
                            className="text-sm font-medium"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={draft.description}
                            onChange={(e) => {
                                setDraft({
                                    ...draft,
                                    description: e.target.value
                                })
                            }}
                            className={fieldBaseStyles} 
                        />
                    </div>

                    <button 
                        type="submit"                        
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
                        disabled={!isDirty}
                    >
                        Save
                    </button>

                    <button 
                        type='button'
                        onClick={onCancel}
                    >
                        Cancel
                    </button>             
                </div>
            </form>
        </div>
        
        
    )
}
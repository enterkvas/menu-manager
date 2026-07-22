import type { Menu, UpdateMenuData } from '@/entities/menu/types'
import { useState } from 'react'

type MenuEditorProps = {
    menu: Menu
    onSave: (changes: UpdateMenuData) => void
}

export function MenuEditor({ 
    menu,
    onSave,
}: MenuEditorProps) {
    const [draft, setDraft] = useState(menu) 

    return (
        <>
            <input 
                value={draft.name}
                onChange={(e) => {
                    setDraft({
                        ...draft,
                        name: e.target.value
                    })
                }}
            />  
            <textarea
                value={draft.description}
                onChange={(e) => {
                    setDraft({
                        ...draft,
                        description: e.target.value
                    })
                }}
            />

            <button 
                type="button"
                onClick={() => {
                    onSave({
                        name: draft.name,
                        description: draft.description,
                    })
                }}
            >
                Save
            </button>

        </>
    )
}
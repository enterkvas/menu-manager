import type { Menu } from '@/entities/menu/types'
import { useState } from 'react'

type MenuEditorProps = {
    menu: Menu
}

export function MenuEditor({ menu }: MenuEditorProps) {
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

            <button type="button">
                Not implemented
            </button>

        </>
    )
}
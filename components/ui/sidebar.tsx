import { ButtonGroup, ListboxItem } from '@nextui-org/react'
import { List, SidebarOpen } from 'lucide-react'
import React from 'react'
import { Button } from './button'

const Sidebar = () => {
    return (
        <div className='h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col border border-dashed w-60'>
            <ul>
                {['hello', 'Konnichiwa', 'Bonjour'].map(category =>
                    <li key={category}>
                        <Button variant='link'>{category}</Button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar
import { Tab } from '@headlessui/react'
import { classNames } from 'utli/Utlities'

export default function FilterTab() {
    return (
        <Tab.Group defaultIndex={0}>
            <Tab.List className="inline-flex space-x-1 rounded-md border">
                {
                    ['Daily', 'Weakly', 'Monthly'].map(f => (
                        <Tab
                            key={f}
                            className={({ selected }) =>
                                classNames(
                                    'px-5 rounded-md py-1',
                                    selected ? 'bg-red-500 text-white' :
                                        'text-red-500 bg-white'
                                )
                            }
                        >
                            {f}
                        </Tab>
                    ))
                }
            </Tab.List>
        </Tab.Group>
    )
}
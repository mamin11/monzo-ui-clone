import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { BriefcaseIcon, UserIcon } from "@heroicons/react/24/solid"

const MenutItem = ({ title, IconLeftJSX, IconRightJSX, className }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            { IconLeftJSX && <IconLeftJSX class="h-4 w-4" /> }
            <span>{title}</span>
            { IconRightJSX && <IconRightJSX class="h-4 w-4" /> }
        </div>
    )
}

export default function Menu() {
    return (
        <div className="flex justify-center">
            <div className="flex gap-8 text-gray-500 bg-gray-200 my-auto p-2 rounded-full">
                <Popover>
                    <PopoverButton className="block text-lg px-4 py-1 font-semibold 50 focus:outline-none data-[active]:text-[#016B83] data-[hover]:text-[#016B83] data-[focus]:outline-1 data-[focus]:outline-white">
                        <MenutItem 
                            className={'text-lg font-semibold bg-white rounded-full px-4 py-1'} 
                            title="Personal" 
                            IconLeftJSX={UserIcon}
                            IconRightJSX={ChevronDownIcon} 
                        />
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        anchor="bottom"
                        className="divide-y divide-white/5 rounded-xl bg-[#F2F8F3] text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                    >
                        <div className="p-3">
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                <p className="font-semibold ">Insights</p>
                                <p className="">Measure actions your users take</p>
                            </a>
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                <p className="font-semibold ">Automations</p>
                                <p className="">Create your own targeted content</p>
                            </a>
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                <p className="font-semibold ">Reports</p>
                                <p className="">Keep track of your growth</p>
                            </a>
                        </div>
                        <div className="p-3">
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                <p className="font-semibold ">Documentation</p>
                                <p className="">Start integrating products and tools</p>
                            </a>
                        </div>
                    </PopoverPanel>
                </Popover>

                <div className="text-lg font-semibold rounded-full px-4 py-2">
                    <MenutItem title="Business" IconLeftJSX={BriefcaseIcon} IconRightJSX={null} />
                </div>
            </div>
        </div>
    )
}

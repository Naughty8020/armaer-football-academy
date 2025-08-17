'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* ロゴ */}
       

        {/* モバイルボタン */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* PCメニュー */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
         

          <a href="#" className="text-sm font-semibold text-black hover:text-gray-700">
            Features
          </a>
          <a href="#" className="text-sm font-semibold text-black hover:text-gray-700">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold text-black hover:text-gray-700">
            Company
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-black">
              Product
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-black text-white shadow-lg">
            <div className="p-4 bg-white">
  {products.map((item) => (
    <div
      key={item.name}
      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-black hover:text-white"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-800">
        <item.icon aria-hidden="true" className="h-6 w-6 text-black group-hover:text-white" />
      </div>
      <div className="flex-auto">
        <a href={item.href} className="block font-semibold text-black group-hover:text-white">
          {item.name}
        </a>
        <p className="mt-1 text-gray-700 group-hover:text-gray-300">{item.description}</p>
      </div>
    </div>
  ))}
</div>

              <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-white hover:bg-gray-600"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 text-white" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>

      {/* モバイルメニュー */}
      {/* モバイルメニュー */}
<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
  <div className="fixed inset-0 z-50" />
  <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm text-black">
    <div className="flex items-center justify-between">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          alt=""
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="h-8 w-auto"
        />
      </a>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(false)}
        className="-m-2.5 rounded-md p-2.5 text-black"
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-200">
        <div className="space-y-2 py-6">
         

          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
            Features
          </a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
            Marketplace
          </a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
            Company
          </a>
          <Disclosure as="div" className="-mx-3">
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
              Product
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
              {[...products, ...callsToAction].map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-black hover:bg-gray-900 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
  </DialogPanel>
</Dialog>

    </header>
  )
}

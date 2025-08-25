'use client'

import { useState } from 'react'
import Link from 'next/link'
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
import { ChevronDownIcon, PhoneIcon, CurrencyYenIcon,ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid'
import TeamIcon from './TeamIcon'
import { usePrograms } from './main/HeaderSection'



const callsToAction = [
  { name: '料金一覧', href: '/training', icon: CurrencyYenIcon },
  { name: 'お申し込み', href: '/contact', icon: ChatBubbleBottomCenterTextIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { programs, loading } = usePrograms()
  const programItems = programs.map((program) => ({
    title: program.title,
    id: program.id, 
    
  }))

  return (
    <header className="bg-gray-50">

      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* ロゴ */}
  
  <TeamIcon className="h-20 w-70 cursor-pointer" />



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
        <Link href="/" className="text-sm font-semibold text-black hover:text-gray-700">
            HOME
          </Link>
          <Link href="/about" className="text-sm font-semibold text-black hover:text-gray-700">
            ABOUT
          </Link>
          <Link href="/training" className="text-sm font-semibold text-black hover:text-gray-700">
            TREANING・PRICE
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-black">
              PROGRAM
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-lg -translate-x-1/2 overflow-hidden rounded-3xl bg-white text-black shadow-lg border-2 border-black">
  <div className="mx-3 my-4">
    <div className="grid grid-cols-1 gap-2 p-4">
    {programItems.map((item) => (
  <Link
    key={item.id}
    href={`/programs/${item.id}`} // プログラムの詳細ページへのリンク
    className="block p-3 border border-gray-300 rounded-lg text-center text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
  >
    {item.title}
  </Link>
))}
    </div>
  </div>

  <div className="grid grid-cols-2 divide-x divide-gray-200 bg-gray-100">
    {callsToAction.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-black hover:bg-gray-200"
      >
        <item.icon aria-hidden="true" className="h-5 w-5 text-black" />
        {item.name}
      </Link>
    ))}
  </div>
</PopoverPanel>

          </Popover>

          <Link href="/contact" className="text-sm font-semibold text-black hover:text-gray-700">
            CONTACT
          </Link>
          <Link href="achievement" className="text-sm font-semibold text-black hover:text-gray-700">
            ACHIEVEMENT
          </Link>
          <Link href="/coach" className="text-sm font-semibold text-black hover:text-gray-700">
            COACH
          </Link>
        </PopoverGroup>
      </nav>

      {/* モバイルメニュー */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm text-black">
          <div className="flex items-center justify-between">
            <TeamIcon className="h-10 w-10" />

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
              <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
                  HOME
                </Link>
                <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
                  ABOUT
                </Link>
                <Link href="/training" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
                  TREANING・PRICE
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
                    PROGRAM
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
  {/* スマホでもプログラムタイトルを表示 */}
  {programItems.map((item, index) => (
    <div
      key={index}
      className="block rounded-lg py-2 px-3 text-sm font-medium text-black hover:bg-gray-200"
    >
      {item.title}
    </div>
  ))}


</DisclosurePanel>

                </Disclosure>
                <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
                  CONTACT
                </Link>
                <Link href="/achievement" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
                  ACHIEVEMENT
                </Link>
                <Link href="/coach" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-900 hover:text-white">
                  COACH
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

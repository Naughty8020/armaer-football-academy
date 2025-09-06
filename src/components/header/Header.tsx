'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, CurrencyYenIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid'
import TeamIcon from '../ui/TeamIcon'
import { usePrograms } from '../main/HeaderSection'

const callsToAction = [
  { name: '料金一覧', href: '/training', icon: CurrencyYenIcon },
  { name: 'お申し込み', href: '/contact', icon: ChatBubbleBottomCenterTextIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { programs } = usePrograms()
  const programItems = programs.map((program) => ({
    title: program.title,
    id: program.id,
  }))

  const pathname = usePathname()

  // リンク用の関数：現在ページは赤、ホバーで濃く
  const linkClass = (href: string, baseClass = 'text-sm font-semibold') =>
    `${baseClass} ${pathname === href ? 'text-red-500 hover:text-red-600' : 'text-black hover:text-gray-400'} transition-colors`

  return (
    <header className="bg-gray-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <TeamIcon className="h-10 w-33 sm:h-30 sm:w-70 cursor-pointer" />

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
          <Link href="/" className={linkClass('/')}>HOME</Link>
          <Link href="/about" className={linkClass('/about')}>ABOUT</Link>
          <Link href="/training" className={linkClass('/training')}>TRAINING・PRICE</Link>

          <Popover className="relative">
            {({ open, close }) => (
              <>
                <PopoverButton className={`flex items-center gap-x-1 ${pathname.startsWith('/programs') ? 'text-red-500 hover:text-red-600' : 'text-black hover:text-gray-400'} font-semibold text-sm`}>
                  PROGRAM
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                </PopoverButton>

                <PopoverPanel className="absolute left-1/2 z-50 mt-3 w-screen max-w-lg -translate-x-1/2 overflow-hidden rounded-3xl bg-white text-black shadow-lg border-2 border-black">
                  <div className="flex justify-end pt-4 pr-8 pb-0">
                    <Popover.Button
                      as="button"
                      className="flex items-center justify-center w-8 h-8 rounded border border-gray-300 text-gray-700 hover:text-black hover:border-black transition-all duration-200"
                      aria-label="閉じる"
                    >
                      ×
                    </Popover.Button>
                  </div>

                  <div className="mx-3 mt-0 my-4">
                    <div className="grid grid-cols-1 gap-2 p-4">
                      {programItems.map((item) => (
                        <Link
                          key={item.id}
                          href={`/programs/${item.id}`}
                          onClick={close}
                          className={`block p-3 border border-gray-300 rounded-lg text-center text-sm font-medium ${pathname === `/programs/${item.id}` ? 'text-red-500 hover:text-red-600' : 'text-black hover:bg-gray-400'} transition-colors`}
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
                        onClick={close}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-black hover:bg-gray-400 transition-colors"
                      >
                        <item.icon aria-hidden="true" className="h-5 w-5 text-black" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link href="/contact" className={linkClass('/contact')}>CONTACT</Link>
          <Link href="/achievement" className={linkClass('/achievement')}>ACHIEVEMENT</Link>
          <Link href="/coach" className={linkClass('/coach')}>COACH</Link>
        </PopoverGroup>
      </nav>

      {/* モバイルメニュー */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm text-black">
          <div className="flex items-center justify-between">
            <TeamIcon className="h-10 w-33 sm:h-40 sm:w-100 cursor-pointer" />
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
                {['/', '/about', '/training', '/contact', '/achievement', '/coach'].map((href) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-400 hover:text-white transition-colors"
                    style={{ color: pathname === href ? '#ef4444' : undefined }}
                  >
                    {href === '/' ? 'HOME' :
                     href === '/about' ? 'ABOUT' :
                     href === '/training' ? 'TRAINING・PRICE' :
                     href === '/contact' ? 'CONTACT' :
                     href === '/achievement' ? 'ACHIEVEMENT' :
                     'COACH'}
                  </Link>
                ))}

                {/* モバイルのプログラムメニュー */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-black hover:bg-gray-400 hover:text-white transition-colors">
                    PROGRAM
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {programItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/programs/${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 px-3 text-sm font-medium text-black hover:bg-gray-400 transition-colors"
                        style={{ color: pathname === `/programs/${item.id}` ? '#ef4444' : undefined }}
                      >
                        {item.title}
                      </Link>
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

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import LineSection from '@/components/contact/LineSection'
import { LuLamp } from 'react-icons/lu'
export default function Example() {
  return (
    <>
    <LineSection />
    
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* 背景の装飾 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[144.5rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[288.75rem]"
        />
      </div>

      {/* 見出し */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          その他お問い合わせ
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
            公式LINEからでもお問い合わせが可能です
        </p>
      </div>

      {/* フォーム */}
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">
            姓
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">
              名
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400"
              />
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              メールアドレス
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-700">
              電話番号
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-400">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-600 focus:outline-0 sm:text-sm"
                  >
                   
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              メッセージ
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400"
                defaultValue={''}
              />
            </div>
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <input
                id="agree-to-policies"
                name="agree-to-policies"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-400"
              />
            </div>
            <label htmlFor="agree-to-policies" className="text-sm text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold whitespace-nowrap text-indigo-500 hover:text-indigo-600">
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gradient-to-r from-[#ff80b5] to-[#9089fc] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            お問い合わせを送信
          </button>
        </div>
      </form>
    </div>
    </>


  )
}

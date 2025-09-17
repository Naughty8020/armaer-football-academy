"use client";

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Button from "../../ui/Button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
const container:Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const item:Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function FormSection() {
  return (
    <motion.div
      className="relative bg-white px-6 py-12 sm:py-16 lg:px-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div variants={item} className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">その他お問い合わせ</h2>
        <p className="mt-2 text-md text-gray-600">公式LINEからでもお問い合わせが可能です</p>
      </motion.div>

      <motion.form
        variants={container}
        className="mx-auto mt-16 max-w-xl grid gap-6 sm:grid-cols-2"
      >
        <motion.div variants={item}>
          <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">
            姓
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">
            名
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-700">
            電話番号
          </label>
          <div className="mt-2 relative flex items-center rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-indigo-200">
            <select
              id="country"
              name="country"
              className="h-full rounded-l-md bg-transparent px-3 text-gray-600 focus:outline-none"
            >
              <option>JP</option>
            </select>
            <ChevronDownIcon className="h-5 w-5 absolute right-3 pointer-events-none text-gray-400" />
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              placeholder="123-456-7890"
              className="flex-1 rounded-r-md border-l border-gray-300 px-3 py-2 text-gray-900 focus:outline-none"
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2 flex items-center gap-2">
          <input
            id="agree-to-policies"
            name="agree-to-policies"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-200"
          />
          <label htmlFor="agree-to-policies" className="text-sm text-gray-600">
            By selecting this, you agree to our{' '}
            <a href="#" className="text-indigo-500 font-semibold hover:text-indigo-600">
              privacy policy
            </a>
            .
          </label>
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <Button
            type="submit"
            className="mt-4 w-full rounded-md bg-[rgb(241,84,84)] hover:bg-[rgb(164,88,88)] transition inline-block px-3 py-2 text-white font-semibold hover:opacity-90"
          >
            お問い合わせを送信
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

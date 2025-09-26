"use client";

import { useRef, useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Button from "../../ui/Button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FormSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
  
    console.log("SERVICE_ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE_ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC_KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  

  return (
    <motion.div className="relative bg-white px-6 py-12 sm:py-16 lg:px-8" initial="hidden" animate="show" variants={container}>
      <motion.div variants={item} className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">お問い合わせ</h2>
        <p className="mt-2 text-md text-gray-600">公式LINEからでもお問い合わせが可能です</p>
      </motion.div>

      <motion.form
  ref={formRef}
  onSubmit={handleSubmit}
  variants={container}
  className="mx-auto mt-16 max-w-xl grid gap-6 sm:grid-cols-2"
>
  {/* 姓 */}
  <motion.div variants={item}>
    <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">姓</label>
    <input
      type="text"
      name="first_name"
      id="first-name"
      required
      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
    />
  </motion.div>

  {/* 名 */}
  <motion.div variants={item}>
    <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">名</label>
    <input
      type="text"
      name="last_name"
      id="last-name"
      required
      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
    />
  </motion.div>

  {/* メールアドレス */}
  <motion.div variants={item} className="sm:col-span-2">
    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">メールアドレス</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
    />
  </motion.div>

  {/* 電話番号 */}
  <motion.div variants={item} className="sm:col-span-2">
    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">電話番号</label>
    <input
      type="text"
      name="phone"
      id="phone"
      placeholder="090-1234-5678"
      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
    />
  </motion.div>

  {/* メッセージ */}
  <motion.div variants={item} className="sm:col-span-2">
    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">メッセージ</label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required
      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
    />
  </motion.div>

  {/* 送信ボタン */}
  <motion.div variants={item} className="sm:col-span-2">
    <Button
      type="submit"
      disabled={status === "sending"}
      className="mt-4 w-full rounded-md bg-[rgb(241,84,84)] hover:bg-[rgb(164,88,88)] transition px-3 py-2 text-white font-semibold"
    >
      {status === "sending" ? "送信中..." : "送信"}
    </Button>
    {status === "success" && <p className="mt-2 text-green-600 text-sm">送信完了しました！</p>}
    {status === "error" && <p className="mt-2 text-red-600 text-sm">送信に失敗しました。</p>}
  </motion.div>
</motion.form>

    </motion.div>
  );
}

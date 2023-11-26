"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import styles from "./footer.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function SubFooter() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      form.current &&
      process.env.YOUR_SERVICE_ID &&
      process.env.YOUR_TEMPLATE_ID &&
      process.env.YOUR_PUBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.YOUR_SERVICE_ID,
          process.env.YOUR_TEMPLATE_ID,
          form.current,
          process.env.YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            alert(`Error: ${error.text}`); // 弹出错误消息
            console.log(error.text);
          }
        );
    } else {
      alert("Error: Environment variables not found"); // 可能的环境变量错误
    }
  };

  return (
    <Box
      component="div"
      aria-label="div"
      sx={{ flexGrow: 1 }}
      className="p-4 bg-slate-100 flex justify-around"
    >
      <div className={`${styles.colum} items-start`}>
        <h2>好力勞工平台</h2>
        <div className={styles.info}>
          <div className={styles.image}>
            <Image src="/company_logo.png" alt="icon" fill />
          </div>
          <div className={styles.contact}>
            <span>聯絡資訊</span>
            <span>LINE:XD123</span>
            <span>Phone:09xxxxxxxx</span>
            <span>若是企業合作的話可以優先電話連繫</span>
          </div>
        </div>
      </div>
      <div className={`${styles.colum} items-center`}>
        <h2>疑難雜症</h2>
        <div className={styles.qa}>
          <span>申請辦法</span>
          <span>申請流程</span>
          <span>申請Q&A</span>
          <span>線上申請</span>
          <span>給網站評價</span>
        </div>
      </div>
      <div className={`${styles.colum} items-start`}>
        <h2>非即時官方詢問</h2>
        <form ref={form} onSubmit={sendEmail} className={styles.emailBox}>
          <label>姓名</label>
          <input type="text" name="user_name" />
          <label>信箱</label>
          <input type="email" name="user_email" />
          <label>您的問題</label>
          <textarea name="message" />
          <button type="submit" className={styles.submitButton}>
            送出
          </button>
        </form>
      </div>
    </Box>
  );
}

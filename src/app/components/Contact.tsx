"use client";
import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import emailjs from "emailjs-com";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const params = {
      name: form.name,
      email: form.email,
      message: form.message,
    };
    // We want to send an email to my email
    try {
      // UNEXPOSE THESE SOMEHOW
      const res = await emailjs.send(
        "service_unczgnm",
        "template_zicaias",
        params,
        "BwaxxAdfT1Ph51jaO"
      );
      console.log("Email sent: " + res.text);
      alert("Message Sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError("Email send error:" + err.message);
      alert("Failed to send message. Please try again later.");
    }
  };
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </>
  );
}

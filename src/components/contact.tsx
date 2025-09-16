

import { useRef } from "react"
import emailjs from "@emailjs/browser"

function ContactForm() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          "service_jbnzf2q", // EmailJS service ID
          "template_6e0q9lv", // EmailJS template ID
          form.current,
          "WwVx3OjDqu9fDPPso" // EmailJS public key
        )
        .then(
          () => {
            alert("Message sent successfully!")
            form.current?.reset() // clear form
          },
          (error) => {
            console.error("EmailJS Error:", error)
            alert("Something went wrong. Please try again later.")
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="p-4 bg-dark text-light rounded shadow-lg"
    >
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="user_name"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="user_email"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Subject</label>
        <input
            type="text"
            name="title"
            className="form-control"
            required
        />
        </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          name="message"
          rows={4}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm

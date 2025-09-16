import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "./Contact.css"

function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          "service_jbnzf2q",
          "template_6e0q9lv",
          form.current,
          "WwVx3OjDqu9fDPPso"
        )
        .then(
          () => {
            setToast({ type: "success", message: "✅ Your message has been sent successfully!" })
            form.current?.reset()
            setTimeout(() => setToast(null), 4000) // auto-hide
          },
          (error) => {
            console.error("EmailJS Error:", error)
            setToast({ type: "error", message: "❌ Oops! Something went wrong. Please try again." })
            setTimeout(() => setToast(null), 4000)
          }
        )
    }
  }

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div className={`toast-message ${toast.type}`}>
          {toast.message}
          <button className="close-btn" onClick={() => setToast(null)}>✖</button>
        </div>
      )}

      <div className="contact-form">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="user_name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="user_email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input type="text" name="title" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" rows={5} className="form-control" required />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm

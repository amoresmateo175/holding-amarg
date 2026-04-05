export default function Contact() {
  return (
    <section id="contact" className="container py-20 fade-in">
      <h2 className="text-4xl font-bold mb-8" style={{ color: "var(--primary)" }}>Contact Us</h2>
      <form className="grid gap-4 max-w-xl">
        <input type="text" placeholder="Name" className="p-3 border rounded" />
        <input type="email" placeholder="Email" className="p-3 border rounded" />
        <textarea placeholder="Message" className="p-3 border rounded" rows={5}></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
}
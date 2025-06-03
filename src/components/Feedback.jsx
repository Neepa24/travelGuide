import React, { useState } from "react";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback("");
    // Here you could send feedback to a server
  };

  return (
    <section id="feedback" style={{
      background: "#f7f7fa",
      padding: "48px 0",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>We Value Your Feedback</h2>
      <p style={{ marginBottom: "2rem", color: "#555" }}>
        Let us know how we can improve your travel experience!
      </p>
      {submitted ? (
        <div style={{ color: "#8000ff", fontWeight: "bold" }}>Thank you for your feedback!</div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
          <textarea
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder="Your feedback..."
            required
            rows={4}
            style={{
              width: "100%",
              borderRadius: 10,
              border: "1.5px solid #e0e0e0",
              padding: 16,
              fontSize: "1rem",
              marginBottom: 16,
              resize: "vertical"
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              padding: "12px 36px",
              borderRadius: 8,
              border: "none",
              background: "linear-gradient(90deg,#ff8c00,#8000ff)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(128,0,255,0.10)",
              transition: "background 0.3s, transform 0.2s"
            }}
          >
            Submit
          </button>
        </form>
      )}
      <Testimonials />
      <Footer />
    </section>
  );
}
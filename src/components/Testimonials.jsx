function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "IronFit Gym completely changed my life. I've lost 40 pounds and gained confidence I never knew I had. The trainers are incredible and the community is so supportive!",
      name: "Sarah Johnson"
    },
    {
      id: 2,
      quote: "After years of struggling to build muscle, I finally found the right program at IronFit. The personalized training approach helped me gain 20 pounds of lean muscle in just 6 months.",
      name: "Michael Chen"
    },
    {
      id: 3,
      quote: "The best investment I've ever made in myself. The facilities are top-notch, the staff is knowledgeable, and I actually look forward to my workouts every day!",
      name: "Emily Rodriguez"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Members Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

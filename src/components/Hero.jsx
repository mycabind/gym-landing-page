function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <h1 className="hero-title">Transform Your Body Today</h1>
      <p className="hero-subtitle">Join our community and achieve your goals</p>
      <button onClick={scrollToForm} className="hero-cta">Get Started</button>
    </section>
  );
}

export default Hero;

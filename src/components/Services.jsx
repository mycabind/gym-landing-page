function Services() {
  const programs = [
    {
      id: 1,
      title: 'Muscle Gain',
      description: 'Build lean muscle mass with our structured strength training programs designed to maximize hypertrophy and power.'
    },
    {
      id: 2,
      title: 'Fat Loss',
      description: 'Shed unwanted weight through high-intensity cardio sessions and metabolic conditioning workouts that burn calories.'
    },
    {
      id: 3,
      title: 'Shredding',
      description: 'Get competition-ready with our advanced cutting programs that combine training and nutrition for maximum definition.'
    },
    {
      id: 4,
      title: 'Personal Training',
      description: 'Work one-on-one with certified trainers who create customized programs tailored to your specific goals and needs.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <div className="services-grid">
          {programs.map((program) => (
            <div key={program.id} className="service-card">
              <h3 className="service-title">{program.title}</h3>
              <p className="service-description">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

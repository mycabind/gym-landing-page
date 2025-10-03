import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    goal: 'Gain'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nGoal: ${formData.goal}`);
  };

  return (
    <section id="contact" className="form-section">
      <h2 className="form-title">Sign Up Today</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
        >
          <option value="Gain">Gain</option>
          <option value="Lose">Lose</option>
          <option value="Shred">Shred</option>
        </select>
        <button type="submit">Join Now</button>
      </form>
    </section>
  );
}

export default Form;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} IronFit Gym. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

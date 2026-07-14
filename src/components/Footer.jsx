const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          Rajesh K
        </a>

        <p>
          Designed & built by Rajesh K © {currentYear}
        </p>

        <a href="#home" className="back-to-top" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
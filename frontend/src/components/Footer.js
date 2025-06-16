import '../App.css';


function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <p className="footer-text">
        © {currentYear} Keeper App by Agamjot Singh
      </p>
      <p className="footer-subtext">
        Made by Agamjot Singh
      </p>
    </footer>
  );
}

export default Footer;
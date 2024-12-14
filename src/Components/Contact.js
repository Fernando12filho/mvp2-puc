import Footer from "./Footer";
import Header from "./Header";
import "./style.css";


//Contato 
function Contact() {
  return (
    <div className="body">
      <Header />
      <div id="text-body" className="contact-container">
        <p>send me an email</p>
        <a href="/">fgmelofilho@gmail.com</a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

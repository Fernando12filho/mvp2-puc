import Header from "./Header";
import Footer from "./Footer";
import "./style.css";


// secao sobre mim, na dmais, texto estatico, e importa header e footer 
function About() {
  return (
    <div className="body">
      <Header />
      <div id="text-body">
        <h2>About Me</h2>
        <p>
          I am an enthusiastic web developer with a solid foundation in
          Information Technology, holding a Bachelor of Science degree from the
          University of Central Florida and pursuing postgraduate studies in
          Full Stack Web Development at PUC Rio. My passion lies in crafting
          innovative solutions that merge technology and usability to deliver
          impactful results
        </p>
        <p>
          With experience leading development projects, I specialize in React,
          TypeScript, and Python, utilizing frameworks like Flask and SQLite to
          build dynamic applications. My portfolio includes a cryptocurrency
          tracking platform integrating real-time APIs and a mobile-friendly
          landing page that boosted business visibility for a local pizzeria.
        </p>
        <p>
          Beyond development, I bring a collaborative mindset, having coached
          young athletes and created engaging digital content. Fluent in English
          and Portuguese, I thrive in multicultural environments, bridging
          technical expertise with user-centered design to solve challenges and
          create seamless digital experiences.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;

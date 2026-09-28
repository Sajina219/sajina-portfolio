function App() {
  return (
    <div className="app">

      {/* =========================
          NAVIGATION
      ========================= */}
      <nav className="navbar">

        <a href="#home" className="logo">
          Sajina Paudel
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      {/* =========================
          HERO SECTION
      ========================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="status-badge">
            <span className="status-dot"></span>
            Open to learning & opportunities
          </div>

          <p className="greeting">
            HELLO, I'M
          </p>

          <h1>
            Sajina Paudel
          </h1>

          <h2>
            Health Informatics Student &<br />
            Aspiring Health Technology Professional
          </h2>

          <p className="hero-description">
            I am passionate about the intersection of healthcare,
            technology, and data. I enjoy exploring digital health
            systems and building practical solutions that can make
            healthcare information more accessible and useful.
          </p>

          {/* HERO BUTTONS */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Work
            </a>

            <a
              href="/Sajina-paudel-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              View Resume
            </a>

          </div>

          {/* RESUME DOWNLOAD */}
          <a
            href="/Sajina-paudel-resume.pdf"
            download="Sajina-paudel-resume.pdf"
            className="resume-download"
          >
            ↓ Download Resume
          </a>

          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href="https://github.com/Sajina219"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/sajina-paudel-350882292/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

      </section>

      {/* =========================
          ABOUT SECTION
      ========================= */}
      <section
        id="about"
        className="section about-section"
      >

        <div className="about-heading">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Turning healthcare
            <br />
            challenges into ideas.
          </h2>

        </div>

        <div className="about-content">

          <p>
            I am a Health Informatics student at Kathmandu University
            with an interest in the intersection of healthcare,
            technology, and data.
          </p>

          <p>
            Through my academic projects, I have explored digital
            health systems, healthcare databases, electronic health
            records, GIS, and healthcare information standards.
          </p>

          <p>
            I enjoy learning new technologies and applying them to
            practical healthcare problems. My goal is to continue
            developing my technical and analytical skills while
            contributing to meaningful health technology solutions.
          </p>

          <div className="about-highlights">

            <div>
              <strong>Health</strong>
              <span>Healthcare Technology</span>
            </div>

            <div>
              <strong>Data</strong>
              <span>Health Information</span>
            </div>

            <div>
              <strong>Tech</strong>
              <span>Digital Solutions</span>
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          EDUCATION SECTION
      ========================= */}
      <section
        id="education"
        className="section journey-section"
      >

        <p className="section-label">
          EDUCATION
        </p>

        <h2>
          My Academic Journey
        </h2>

        <div className="journey-grid">

          <div className="journey-column">

            <div className="timeline">

              {/* Kathmandu University */}
              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <span className="timeline-year">
                    Current
                  </span>

                  <h3>
                    Bachelor in Health Informatics
                  </h3>

                  <p className="timeline-place">
                    Kathmandu University
                  </p>

                  <p>
                    Currently studying Health Informatics with
                    an interest in healthcare technology, digital
                    health, healthcare data, and information systems.
                  </p>

                </div>

              </div>

              {/* +2 */}
              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <span className="timeline-year">
                    Higher Secondary Education
                  </span>

                  <h3>
                    Science — Biology
                  </h3>

                  <p className="timeline-place">
                    Baylor International Academy
                  </p>

                  <p>
                    Completed higher secondary education with
                    a focus on science and biology.
                  </p>

                </div>

              </div>

              {/* SEE */}
              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div className="timeline-content">

                  <span className="timeline-year">
                    Secondary Education
                  </span>

                  <h3>
                    Secondary Education Examination
                  </h3>

                  <p className="timeline-place">
                    Kshitij English Boarding School
                  </p>

                  <p>
                    Completed secondary level education with
                    a strong academic foundation.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          PROJECTS SECTION
      ========================= */}
      <section
        id="projects"
        className="section"
      >

        <p className="section-label">
          MY WORK
        </p>

        <h2>
          Featured Projects
        </h2>

        <p className="projects-intro">
          A selection of academic and personal projects focused on
          healthcare technology, digital health, and data.
        </p>

       <div className="projects">

  {/* PROJECT 1 */}
  <div className="project-card">

            <div className="project-number">
              01
            </div>

            <div className="project-content">

              <h3>
                MedTracker
              </h3>

              <p>
                A medication reminder and adherence tracking system
                designed to help users manage medicines, schedules,
                prescriptions, health records, and adherence.
              </p>

              <div className="project-tags">

                <span>React</span>
                <span>Django</span>
                <span>SQLite</span>

              </div>

            </div>

            <div className="project-links">

              <a href="#contact">
                View Details →
              </a>

            </div>

          </div>

          {/* PROJECT 2 */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <div className="project-content">

              <h3>
                National Lifetime Health Record System
              </h3>

              <p>
                A proposed digital health system for maintaining
                longitudinal health records and vaccination
                information throughout a person's lifetime.
              </p>

              <div className="project-tags">

                <span>Digital Health</span>
                <span>HL7 FHIR</span>
                <span>Health Data</span>

              </div>

            </div>

            <div className="project-links">

              <a href="#contact">
                View Details →
              </a>

            </div>

          </div>

          {/* PROJECT 3 */}
          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <div className="project-content">

              <h3>
                Drug Inventory & Expiry Tracking System
              </h3>

              <p>
                A healthcare inventory management system designed
                to track medicines, monitor stock levels, and
                identify medicines approaching their expiry dates.
              </p>

              <div className="project-tags">

                <span>Healthcare</span>
                <span>Database</span>
                <span>Inventory</span>

              </div>

            </div>

            <div className="project-links">

              <a href="#contact">
                View Details →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          SKILLS SECTION
      ========================= */}
      <section
        id="skills"
        className="section skills-section"
      >

        <><p className="section-label">
            WHAT I USE
          </p><h2>
              Skills & Technologies
            </h2><p className="skills-intro">
              Technologies and tools I have been learning and using
              through my studies and projects.
            </p><div className="skill-groups">

              {/* Programming */}
              <div className="skill-group">

                <h3>
                  Programming & Development
                </h3>

                <div className="skills">

                  <span>Python</span>
                  <span>Django</span>
                  <span>React</span>

                </div>

              </div>

              {/* Data */}
              <div className="skill-group">

                <h3>
                  Data & Databases
                </h3>

                <div className="skills">

                  <span>SQL</span>
                  <span>MongoDB</span>
                  <span>Microsoft Excel</span>

                </div>

              </div>

              {/* Health Informatics */}
              <div className="skill-group">

                <h3>
                  Health Informatics
                </h3>

                <div className="skills">

                  <span>Health Informatics</span>
                  <span>HL7 FHIR</span>
                  <span>Digital Health</span>

                </div>

              </div>

              {/* Other */}
              <div className="skill-group">

                <h3>
                  Other Tools
                </h3>

                <div className="skills">

                  <span>QGIS · Basic</span>

                </div>

              </div>

            </div></>

      </section>

      {/* =========================
          CONTACT SECTION
      ========================= */}
      <section
        id="contact"
        className="section contact"
      >
        {/* CONTACT FORM */}
<div className="contact-form-header">
  <h3>Get in Touch</h3>
  <p>
    I'm a Health Informatics student interested in digital health,
    healthcare technology, internships, research opportunities,
    and collaborations. Feel free to send me a message.
  </p>
</div>

<form className="contact-form">

  <div className="form-row">

    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
      />
    </div>

  </div>

  <div className="form-row">

    <div className="form-group">
      <label htmlFor="organization">Organization / Company</label>
      <input
        id="organization"
        type="text"
        name="organization"
        placeholder="University, Hospital, Company, etc."
      />
    </div>

    <div className="form-group">
      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="Internship, Collaboration, Project..."
        required
      />
    </div>

  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      rows="6"
      placeholder="Tell me about your project, opportunity, or message..."
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="primary-button"
  >
    Send Message
  </button>

</form>

        <><p className="section-label">
            CONTACT
          </p><h2>
              Let's connect.
            </h2><p>
              Interested in healthcare technology, digital health,
              and building meaningful solutions.
            </p><div className="contact-details">

              <a href="mailto:sajinapaudel79@gmail.com">
                ✉ sajinapaudel79@gmail.com
              </a>

              <a href="tel:+9779746289467">
                ☎ +977 9746289467
              </a>

            </div><div className="contact-buttons">

              <a
                href="mailto:sajinapaudel79@gmail.com"
                className="primary-button"
              >
                Email Me
              </a>

              <a
                href="#home"
                className="secondary-button"
              >
                Back to Top ↑
              </a>

            </div></>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>

        <><p>
          © 2026 Sajina Paudel
        </p><p>
            Health Informatics · Healthcare Technology · Digital Health
          </p></>

      </footer>

    </div>
  );
}

export default App;        
export default function Index() {
  return (
    <>
      <header>
        <nav>
          <div class="logo">
            <a href="#">OfficeHub</a>
          </div>
          <ul class="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="signup.html">Sign Up</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>OfficeHub - Connecting Students to Workspaces</h1>
          <p>Find your perfect workspace today.</p>
          <a href="signup.html" class="cta">
            Get Started
          </a>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>
            At OfficeHub, we're passionate about helping students find the
            perfect co-working space to support their academic and professional
            goals. Our platform was created by a team of experienced
            professionals who understand the challenges that students face when
            trying to find a workspace that fits their unique needs. We believe
            that everyone should have access to affordable, flexible, and
            inspiring work environments that allow them to be productive and
            creative. That's why we've partnered with some of the best
            co-working spaces around the world to bring you a curated selection
            of workspaces that meet our high standards of quality, comfort, and
            convenience. Whether you're a student entrepreneur, freelancer, or
            remote worker, we're here to help you find a workspace that empowers
            you to thrive.
          </p>
          <a href="about.html" class="learn-more">
            Learn More
          </a>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <p>
            At OfficeHub, we are dedicated to helping students find their
            perfect co-working space. Our platform provides a range of options
            for students to choose from, including spaces that are affordable,
            flexible, and inclusive. We make it easy to search for and book
            co-working spaces that match students' requirements, so they can
            focus on their work without worrying about the details. Our team is
            committed to providing an exceptional user experience, and we take
            pride in partnering with co-working spaces that prioritize the needs
            of students. Whether you need a space for studying, collaborating,
            or working, we're here to help you find a co-working space that
            works for you.
          </p>
          <a href="services.html" class="learn-more">
            Learn More
          </a>
        </section>

        <section id="contact" class="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div class="form-group">
              <label for="name" class="form-label">
                Name:
              </label>
              <input type="text" id="name" name="name" required />
            </div>

            <div class="form-group">
              <label for="email" class="form-label">
                Email:
              </label>
              <input type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
              <label for="message" class="form-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                class="form-textarea"
                required
              ></textarea>
            </div>

            <div class="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </main>

      <footer>
        <div class="footer-content">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="signup.html">Sign Up</a>
            </li>
          </ul>
          <div class="footer-logo">
            <a href="#">OfficeHub</a>
            <p>&copy; 2023 OfficeHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

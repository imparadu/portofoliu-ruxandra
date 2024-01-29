import Navigation from './Navigation';

export default function Contact() {
  return (
    <div>
      <Navigation />
      <div className="containerContact">
        <div>
          <h2>Get in touch:</h2>
          <form>
            <div className='inputDiv'>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name:"
              />
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email:"
              />
              <label htmlFor=""></label>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Message:"
              />
              <input
                type="submit"
                value="Submit"
                id="submit"
              />
            </div>
          </form>
          <p>or send email @</p>
          <p>chocolatechiphelmet@gmail.com</p>
        </div>
        <div className="containerPozaContact">
          <img
            src="/portfolio/field.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

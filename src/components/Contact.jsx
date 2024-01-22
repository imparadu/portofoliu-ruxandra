export default function Contact() {
  return (
    <div>
      <div>
        <h2>Get in touch:</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
      <p>or send email @</p>
      <p>chocolatechiphelmet@gmail.com</p>
      </div>
      <div>
      <img
        src="https://placehold.co/600x400"
        alt=""
      />
      </div>
    </div>
  );
}

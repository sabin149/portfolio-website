import ContactForm from "components/Contact/ContactForm";

const Contact = () => {
  return (
    <section className="flex flex-shrink-0 flex-wrap items-center justify-center px-2 lg:px-0">
      <div className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-lg border px-5 py-5 shadow-md">
        <div className="mb-5 px-4">
          <h2 className="border-b-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;

import ContactForm from "../components/contactForm";
import PagesHero from "../components/PagesHero";

function ContactsPage() {
  return (
    <main>
      <PagesHero headerTxt="Contact Us" />
      <section className="bg-secondary py-6 px-4 mt-12 mb-4">
        <div className="w-[60%] mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

export default ContactsPage;

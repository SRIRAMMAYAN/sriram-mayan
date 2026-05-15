import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="certifications"><Clients /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="activities"><Testimonial /></section>
      <section id="techstack"><PopularClients /></section>
      <section id="contact"><ContactForm /></section>
      <Footer />
    </>
  );
}

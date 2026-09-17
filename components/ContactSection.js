import { FiMail, FiPhone, FiArrowUpRight } from 'react-icons/fi';
import { contact, resume } from '../data/portfolioData';

export default function ContactSection() {
  const cards = [
    { label: 'Email', value: contact.email, href: contact.emailHref, action: 'Send an Email', Icon: FiMail },
    { label: 'Phone', value: contact.phone, href: contact.phoneHref, action: 'Call / Get in Touch', Icon: FiPhone },
  ];
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container section contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">04 / YOUR NEXT IDEA STARTS HERE</p>
          <h2 id="contact-heading">{contact.heading}</h2>
          <p>{contact.intro}</p>
          <a href={resume.href} download className="text-link contact-resume">{resume.label} ↓</a>
        </div>
        <div className="contact-cards">
          {cards.map(({ label, value, href, action, Icon }) => (
            <a className="contact-card" href={href} key={label}>
              <span className="contact-card-top"><span className="eyebrow">{label}</span><Icon aria-hidden="true" /></span>
              <span className="contact-value">{value}</span>
              <span className="contact-card-action">{action}<FiArrowUpRight aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

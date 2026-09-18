import { assetPath } from '../lib/paths';
import { FiMail, FiPhone, FiArrowUpRight } from 'react-icons/fi';
import { FaBehance, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { contact, resume } from '../data/portfolioData';

export default function ContactSection() {
  const primaryCards = [
    {
      label: 'Email',
      value: contact.email,
      href: contact.emailHref,
      action: 'Send an Email',
      Icon: FiMail,
      ariaLabel: `Send an email to ${contact.email}`
    },
    {
      label: 'Phone',
      value: contact.phone,
      href: contact.phoneHref,
      action: 'Call / Get in Touch',
      Icon: FiPhone,
      ariaLabel: `Call Ishika at ${contact.phone}`
    }
  ];

  const socialLinks = [
    {
      name: 'Behance',
      href: contact.socialLinks.behance,
      Icon: FaBehance,
      ariaLabel: 'Ishika Shakya on Behance (opens in a new tab)'
    },
    {
      name: 'Instagram',
      href: contact.socialLinks.instagram,
      Icon: FaInstagram,
      ariaLabel: 'Ishika Shakya on Instagram (opens in a new tab)'
    },
    {
      name: 'YouTube',
      href: contact.socialLinks.youtube,
      Icon: FaYoutube,
      ariaLabel: 'Ishika Shakya on YouTube (opens in a new tab)'
    },
    {
      name: 'LinkedIn',
      href: contact.socialLinks.linkedin,
      Icon: FaLinkedin,
      ariaLabel: 'Ishika Shakya on LinkedIn (opens in a new tab)'
    }
  ];

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container section contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">04 / YOUR NEXT IDEA STARTS HERE</p>
          <h2 id="contact-heading">{contact.heading}</h2>
          <p>{contact.intro}</p>
          <a href={assetPath(resume.href)} download className="text-link contact-resume" aria-label="Download Ishika's Resume PDF">
            {resume.label} ↓
          </a>
        </div>
        <div className="contact-right">
          <div className="contact-cards">
            {primaryCards.map(({ label, value, href, action, Icon, ariaLabel }) => (
              <a className="contact-card" href={href} key={label} aria-label={ariaLabel}>
                <span className="contact-card-top">
                  <span className="eyebrow">{label}</span>
                  <Icon aria-hidden="true" />
                </span>
                <span className="contact-value">{value}</span>
                <span className="contact-card-action">
                  {action}
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
          <div className="social-links-wrapper">
            <span className="eyebrow social-heading">SOCIAL PROFILES</span>
            <div className="social-grid">
              {socialLinks.map(({ name, href, Icon, ariaLabel }) => (
                <a
                  key={name}
                  className="social-card"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                >
                  <span className="social-card-left">
                    <Icon aria-hidden="true" />
                    <span>{name}</span>
                  </span>
                  <FiArrowUpRight className="social-card-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


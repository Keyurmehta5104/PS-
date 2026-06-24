const ORANGE = '#FF8048';

const socialLinks = [
  { label: 'LinkedIn',  icon: 'fa-brands fa-linkedin-in',  href: 'https://www.linkedin.com/company/professional-softtech' },
  { label: 'Facebook',  icon: 'fa-brands fa-facebook-f',    href: 'https://www.facebook.com/ProfessionalSofttech/' },
  { label: 'Instagram', icon: 'fa-brands fa-instagram',     href: 'https://www.instagram.com/professional_softtech' },
  { label: 'Upwork',    icon: 'fa-brands fa-upwork',         href: 'https://www.upwork.com/agencies/425296127165009920/' },
  { label: 'Clutch',      icon: 'fa-solid fa-award',          href: 'https://clutch.co/profile/professional-soft-tech' },
  { label: 'DesignRush', icon: 'fa-solid fa-pen-ruler',      href: 'https://www.designrush.com/agency/profile/professional-soft-tech' },
];

const company = [
  { label: 'About Us',      href: '#about' },
  { label: 'How We Work',   href: '#process' },
  { label: 'Our Work',      href: '#work' },
  { label: 'Careers',       href: '#careers' },
  { label: 'Testimonials',  href: '#testimonials' },
  { label: 'Blog',          href: '#blog' },
  { label: 'Contact Us',    href: '#contact' },
  { label: 'Sitemap',       href: '#' },
];

const services = [
  {
    group: 'App Development',
    items: ['Web Development', 'Mobile App Dev', 'UI/UX Design'],
  },
  {
    group: 'Enterprise & Scale',
    items: ['Enterprise Apps', 'Digital Commerce', 'IoT Solutions'],
  },
  {
    group: 'Cloud & Quality',
    items: ['DevOps & Cloud', 'QA & Testing', 'Digital Marketing'],
  },
];

const industries = [
  {
    group: 'Popular Verticals',
    items: ['Healthcare', 'Education & eLearning', 'eCommerce & Retail', 'Real Estate'],
  },
  {
    group: 'More Industries',
    items: ['Logistics', 'Social Networking', 'Travel & Hospitality', 'Recruitment & HR', 'Startups', 'Automobile'],
  },
];

const BG = '#E9E5DC';
const TEXT = '#1a1a1a';
const MUTED = '#7a756c';
const LINK = '#3a3530';

export default function Footer() {
  return (
    <footer style={{ background: BG, color: TEXT }} className="relative">

      {/* Main grid */}
      <div className="w-full px-6 md:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1.4fr_1.4fr] gap-12 lg:gap-8">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-6">

            {/* Logo */}
            <a href="#" className="w-fit">
              <img
                src="/ps-logo.png"
                alt="Professional Soft-Tech"
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Tagline */}
            <p className="text-[13px] leading-relaxed max-w-[260px]" style={{ color: MUTED }}>
              Transforming businesses with digital solutions across web, mobile and AI. Since 2010.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: '#d8d3c8', color: MUTED }}
                  onMouseEnter={e => { e.currentTarget.style.background = ORANGE; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#d8d3c8'; e.currentTarget.style.color = MUTED; }}
                >
                  <i className={s.icon} style={{ fontSize: 12 }} />
                </a>
              ))}
            </div>

            {/* Contact pair */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] mb-1.5" style={{ color: MUTED }}>
                  Get Free Estimation
                </p>
                <a
                  href="mailto:enquiry@professionalsofttech.com"
                  className="text-[12px] font-medium transition-colors duration-200"
                  style={{ color: LINK }}
                  onMouseEnter={e => e.currentTarget.style.color = ORANGE}
                  onMouseLeave={e => e.currentTarget.style.color = LINK}
                >
                  enquiry@professionalsofttech.com
                </a>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] mb-1.5" style={{ color: MUTED }}>
                  Apply for Job
                </p>
                <a
                  href="mailto:careers@professionalsofttech.com"
                  className="text-[12px] font-medium transition-colors duration-200"
                  style={{ color: LINK }}
                  onMouseEnter={e => e.currentTarget.style.color = ORANGE}
                  onMouseLeave={e => e.currentTarget.style.color = LINK}
                >
                  careers@professionalsofttech.com
                </a>
              </div>
            </div>

            {/* Our Partners */}
            <div className="pt-2">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: MUTED }}>
                Our Partners
              </p>
              <div className="grid grid-cols-3 gap-2">

                {/* Google Partner */}
                <div
                  className="flex flex-col items-center justify-center gap-1.5 px-2 py-3 rounded-xl text-center"
                  style={{
                    background: '#fff',
                    border: '1px solid #e0dbd0',
                    borderTop: '3px solid #4285F4',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Google G icon */}
                  <svg width="22" height="22" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    <path fill="none" d="M0 0h48v48H0z"/>
                  </svg>
                  <div className="leading-tight">
                    <p className="text-[10px] font-extrabold tracking-tight" style={{ color: '#1a1a1a' }}>Google</p>
                    <p className="text-[8px] font-semibold uppercase tracking-wide" style={{ color: '#4285F4' }}>Partner</p>
                  </div>
                </div>

                {/* Shopify Partner */}
                <div
                  className="flex flex-col items-center justify-center gap-1.5 px-2 py-3 rounded-xl text-center"
                  style={{
                    background: '#fff',
                    border: '1px solid #e0dbd0',
                    borderTop: '3px solid #96BF48',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  <img src="/logos/shopify.svg" alt="Shopify" className="w-6 h-6 object-contain" />
                  <div className="leading-tight">
                    <p className="text-[10px] font-extrabold tracking-tight" style={{ color: '#1a1a1a' }}>Shopify</p>
                    <p className="text-[8px] font-semibold uppercase tracking-wide" style={{ color: '#96BF48' }}>Partner</p>
                  </div>
                </div>

                {/* AWS Partner */}
                <div
                  className="flex flex-col items-center justify-center gap-1.5 px-2 py-3 rounded-xl text-center"
                  style={{
                    background: '#fff',
                    border: '1px solid #e0dbd0',
                    borderTop: '3px solid #FF9900',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* AWS smile icon */}
                  <svg width="26" height="22" viewBox="0 0 60 38" fill="none">
                    <path d="M17 22.5C13.5 21 11 18 11 14.5c0-5.2 4.8-9.5 11-9.5s11 4.3 11 9.5c0 3.5-2.5 6.5-6 8" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <path d="M4 30c3.5 2.5 8.5 4 14 4s10.5-1.5 14-4" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <path d="M46 12h8M50 8v8" stroke="#232F3E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div className="leading-tight">
                    <p className="text-[10px] font-extrabold tracking-tight" style={{ color: '#1a1a1a' }}>AWS</p>
                    <p className="text-[8px] font-semibold uppercase tracking-wide" style={{ color: '#FF9900' }}>Partner</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ── Company column ── */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {company.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] transition-colors duration-200"
                    style={{ color: LINK }}
                    onMouseEnter={e => e.currentTarget.style.color = ORANGE}
                    onMouseLeave={e => e.currentTarget.style.color = LINK}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services column ── */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
              Services
            </p>
            {services.map(group => (
              <div key={group.group}>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.14em] mb-2"
                  style={{ color: ORANGE }}
                >
                  {group.group}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[13px] transition-colors duration-200"
                        style={{ color: LINK }}
                        onMouseEnter={e => e.currentTarget.style.color = ORANGE}
                        onMouseLeave={e => e.currentTarget.style.color = LINK}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Industries column ── */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
              Industries
            </p>
            {industries.map(group => (
              <div key={group.group}>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.14em] mb-2"
                  style={{ color: ORANGE }}
                >
                  {group.group}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[13px] transition-colors duration-200"
                        style={{ color: LINK }}
                        onMouseEnter={e => e.currentTarget.style.color = ORANGE}
                        onMouseLeave={e => e.currentTarget.style.color = LINK}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="w-full px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid #d4cfc6' }}
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] flex flex-wrap items-center gap-x-2 gap-y-1" style={{ color: MUTED }}>
          <span>© {new Date().getFullYear()} Professional Softtech</span>
          <span>·</span>
          <span>All Rights Reserved</span>
          <span>·</span>
          <a href="#" style={{ color: MUTED }} onMouseEnter={e => e.currentTarget.style.color = ORANGE} onMouseLeave={e => e.currentTarget.style.color = MUTED}>
            Privacy Policy
          </a>
          <span>·</span>
          <a href="#" style={{ color: MUTED }} onMouseEnter={e => e.currentTarget.style.color = ORANGE} onMouseLeave={e => e.currentTarget.style.color = MUTED}>
            Terms of Service
          </a>
        </p>

      </div>

    </footer>
  );
}

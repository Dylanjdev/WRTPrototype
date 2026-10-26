import { useEffect, useState } from 'react'
import logo from './assets/wrtlogo.webp'
import './App.css'

const Icon = ({ name, size = 24 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    blueprint: <><path d="M4 19V5a2 2 0 0 1 2-2h10l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M14 3v5h5M8 13h8M8 17h5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    delivery: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    engineering: <><path d="M4 18 12 4l8 14"/><path d="M6.5 14h11M9 9h6M3 20h18"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    play: <path d="m9 7 8 5-8 5Z"/>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    timber: <><path d="M4 17 12 5l8 12M7 17l5-8 5 8M3 20h18"/></>,
    upload: <><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 20h14"/></>,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const services = [
  {
    number: '01',
    title: 'Roof Trusses',
    kicker: 'Residential · Commercial · Agricultural',
    text: 'Engineered roof systems planned around your drawings, building requirements, and jobsite sequence.',
    icon: 'timber',
  },
  {
    number: '02',
    title: 'Open-Web Floor Trusses',
    kicker: 'Flexible, service-ready floor systems',
    text: 'Open-web components that create practical pathways for mechanical, electrical, and plumbing trades.',
    icon: 'engineering',
  },
  {
    number: '03',
    title: 'Specialty & Custom',
    kicker: 'Purpose-built component solutions',
    text: 'A collaborative path for complex rooflines, custom profiles, and distinctive timber applications.',
    icon: 'blueprint',
  },
]

const components = [
  ['I-Joists & LVL Beams', 'Engineered lumber options to support complete structural packages.'],
  ['Hardware & Hangers', 'Compatible connection hardware coordinated with your component order.'],
  ['Wall Panels', 'Ask our team about availability for your project requirements.'],
]

const projects = [
  ['Residential Projects', 'Custom homes · Multi-family · Additions', '01'],
  ['Commercial Projects', 'Retail · Office · Light commercial', '02'],
  ['Barn & Agricultural', 'Equipment storage · Barns · Rural buildings', '03'],
]

const interiorPages = {
  '/about': {
    number: '02 / 08',
    nav: 'About',
    eyebrow: 'About White Rock',
    title: 'Built around the work. Focused on the build.',
    intro: 'White Rock Truss & Components brings component planning, manufacturing, and delivery coordination together in Rose Hill, Virginia. Our role is to give builders a clear path from project drawings to jobsite-ready components.',
    media: 'FACILITY / TEAM IMAGE PLACEHOLDER',
    sections: [
      ['Our Process', 'A practical sequence that moves from plan review and project coordination through manufacturing and delivery planning.', 'engineering'],
      ['Quality Standards', 'Quality starts with accurate project information, clear approvals, and careful attention before production begins.', 'shield'],
      ['Service Area & Delivery', 'We coordinate project location, site access, load staging, and timing from our Rose Hill operation.', 'delivery'],
    ],
    callout: 'A company story video, facility tour, or leadership message can be added to this page when those assets are ready.',
  },
  '/truss-engineering': {
    number: '03 / 08',
    nav: 'Truss Systems',
    eyebrow: 'Truss Engineering & Manufacturing',
    title: 'Structural systems made for the project.',
    intro: 'From straightforward roof packages to open-web floor systems and custom profiles, each project begins with your plans, requirements, and construction sequence.',
    media: 'TRUSS PRODUCTION IMAGE PLACEHOLDER',
    sections: [
      ['Roof Trusses', 'Residential, commercial, and agricultural roof systems developed around the project drawings and required profiles.', 'timber'],
      ['Open-Web Floor Trusses', 'Floor components that offer structural performance while creating practical pathways for building services.', 'engineering'],
      ['Specialty & Custom Timber Trusses', 'A collaborative route for distinctive forms, complex rooflines, and custom timber applications.', 'blueprint'],
    ],
    callout: 'Have a set of plans ready? Send the project files and basic jobsite information to begin a quote review.',
  },
  '/components': {
    number: '04 / 08',
    nav: 'Components',
    eyebrow: 'Engineered Lumber & Components',
    title: 'Bring the structural package together.',
    intro: 'Coordinate compatible engineered lumber, connection hardware, and available wall components around your truss order through one project conversation.',
    media: 'COMPONENT PACKAGE IMAGE PLACEHOLDER',
    sections: [
      ['I-Joists & LVL Beams', 'Engineered lumber options for floor, header, and beam requirements within the broader structural package.', 'engineering'],
      ['Hardware & Hangers', 'Connection hardware and hanger options coordinated for compatibility with the ordered components.', 'shield'],
      ['Wall Panels', 'Ask our team about availability and fit for the specific requirements of your project.', 'blueprint'],
    ],
    callout: 'Share a material list with your plans so the team can review the complete component scope together.',
  },
  '/contractor-resources': {
    number: '05 / 08',
    nav: 'Resources',
    eyebrow: 'Contractor Resources & Forms',
    title: 'Project information in the right place.',
    intro: 'Start a quote, attach project plans, and prepare your team for delivery. This page is the working hub for contractor forms and approved planning documents.',
    media: 'PLAN REVIEW IMAGE PLACEHOLDER',
    kind: 'resources',
    sections: [
      ['Request a Free Quote / Upload Plans', 'Send project details and attach available plans using the inquiry form below.', 'upload'],
      ['Truss Profiles & Span Tables', 'A dedicated location for approved PDF profile and span-table guides when they are ready.', 'download'],
      ['Site Delivery Preparation Checklist', 'A future downloadable checklist for access, staging, and delivery-day preparation.', 'delivery'],
    ],
    callout: 'The document buttons are clearly marked placeholders until approved PDF resources are provided.',
  },
  '/projects': {
    number: '06 / 08',
    nav: 'Projects',
    eyebrow: 'Project Gallery',
    title: 'Work that shows what the details can do.',
    intro: 'This gallery is structured for completed residential, commercial, and agricultural work. Replace the placeholders with strong jobsite photography as the project library grows.',
    media: 'FEATURED PROJECT IMAGE PLACEHOLDER',
    kind: 'projects',
    sections: [
      ['Residential Projects', 'Custom homes, multi-family work, additions, and residential building packages.', 'timber'],
      ['Commercial Projects', 'Retail, office, and light-commercial component packages.', 'engineering'],
      ['Barn & Agricultural Projects', 'Barns, equipment storage, and other rural building applications.', 'blueprint'],
    ],
    callout: 'Each gallery category is ready for a mix of finished-project photos, installation details, and concise project notes.',
  },
  '/contact': {
    number: '07 / 08',
    nav: 'Contact',
    eyebrow: 'Contact White Rock',
    title: 'Let’s talk about what you’re building.',
    intro: 'Call the White Rock team or send the project basics through the form below. Include the location, anticipated schedule, and plans when available.',
    media: 'OFFICE / TEAM IMAGE PLACEHOLDER',
    kind: 'contact',
    sections: [
      ['Call the Team', '(276) 445-5990 — the direct starting point for questions, project fit, and scheduling conversations.', 'phone'],
      ['Rose Hill, Virginia', 'Company operations are based in Rose Hill, serving builders and project teams throughout the surrounding region.', 'pin'],
      ['Project Inquiries', 'Send project details and available drawing files so the team can begin reviewing the scope.', 'upload'],
    ],
    callout: 'Business hours, a street address, and a destination email can be added here once confirmed.',
  },
  '/legal': {
    number: '08 / 08',
    nav: 'Legal',
    eyebrow: 'Privacy & Terms',
    title: 'Clear policies for a professional website.',
    intro: 'This page provides structured placeholders for the final privacy policy and terms and conditions. The approved legal language should be reviewed before the site goes live publicly.',
    media: 'DOCUMENT / BRAND IMAGE PLACEHOLDER',
    kind: 'legal',
    sections: [
      ['Privacy Policy', 'Reserved for the final policy covering inquiry information, uploaded project files, analytics, and site communications.', 'shield'],
      ['Terms & Conditions', 'Reserved for the approved terms governing website use, content, documents, and project inquiries.', 'blueprint'],
      ['Document Handling', 'The final policy should specifically address how uploaded plans and project information are received and retained.', 'upload'],
    ],
    callout: 'These sections are intentionally labeled as draft placeholders and are not a substitute for approved legal language.',
  },
}

function InteriorPage({ page, submitted, setSubmitted, fileName, setFileName, handleSubmit }) {
  const showForm = page.kind === 'resources' || page.kind === 'contact'

  return (
    <>
      <section className="interior-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="interior-truss" aria-hidden="true">
          <svg viewBox="0 0 700 340"><path d="M20 270 350 50l330 220M20 270h660M120 270 350 50l230 220M235 270 350 50l115 220M350 50v220" /></svg>
        </div>
        <div className="container interior-hero-content">
          <div className="page-breadcrumb"><a href="/">Home</a><span>/</span>{page.nav}</div>
          <div className="eyebrow"><span /> {page.eyebrow}</div>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
        <div className="page-number">{page.number}</div>
      </section>

      <section className="interior-overview section">
        <div className="container interior-overview-grid">
          <div className="interior-media-placeholder">
            <div className="project-schematic" aria-hidden="true">
              <svg viewBox="0 0 500 300"><path d="M20 240 250 60l230 180M20 240h460M120 240 250 60l130 180M250 60v180" /></svg>
            </div>
            <span>{page.media}</span>
          </div>
          <div className="interior-overview-copy">
            <div className="section-label"><span>CAPABILITIES</span> PAGE OVERVIEW</div>
            <h2>{page.eyebrow}</h2>
            <p>{page.intro}</p>
            <a className="text-link" href="/contractor-resources#quote">Start a project <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>

      <section className="interior-detail section dark-section">
        <div className="container">
          <div className="section-heading light-heading">
            <div><div className="section-label"><span>IN THIS PAGE</span> WHAT WE COVER</div><h2>Built into the scope.</h2></div>
            <p>Focused information from the original site structure, grouped into one substantial parent page.</p>
          </div>
          <div className="interior-card-grid">
            {page.sections.map(([title, text, icon], index) => (
              <article className="interior-card" key={title}>
                <div className="interior-card-top"><span>0{index + 1}</span><Icon name={icon} size={30} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="interior-callout"><Icon name="check" /><p>{page.callout}</p></div>
        </div>
      </section>

      {page.kind === 'projects' && (
        <section className="projects-section section">
          <div className="container">
            <div className="section-heading"><div><div className="section-label"><span>GALLERY</span> FUTURE PROJECT PHOTOGRAPHY</div><h2>Ready for real work.</h2></div><p>Use these spaces for a balanced mix of wide project views and construction details.</p></div>
            <div className="project-grid interior-project-grid">
              {projects.map(([title, text, number], index) => (
                <article className={`project-card project-${index + 1}`} key={title}>
                  <div className="project-image-placeholder" role="img" aria-label={`${title} image placeholder`}>
                    <div className="project-schematic" aria-hidden="true"><svg viewBox="0 0 500 300"><path d="M20 240 250 60l230 180M20 240h460M120 240 250 60l130 180M250 60v180" /></svg></div>
                    <span>IMAGE PLACEHOLDER / {number}</span>
                  </div>
                  <div className="project-info"><div><h3>{title}</h3><p>{text}</p></div><Icon name="arrow" /></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.kind === 'legal' && (
        <section className="legal-note section">
          <div className="container legal-note-inner">
            <div><span>DRAFT STATUS</span><h2>Legal review required before launch.</h2></div>
            <p>The final policies should match the form provider, analytics tools, hosting arrangement, and the company’s actual handling of customer plans and contact information.</p>
          </div>
        </section>
      )}

      {showForm ? (
        <section className="quote-section" id="quote">
          <div className="container quote-layout">
            <div className="quote-intro">
              <div className="section-label"><span>PROJECT FORM</span> START A CONVERSATION</div>
              <h2>Bring us the plans.<br />We’ll map the next step.</h2>
              <p>Tell us what you are building and where. Include drawings when you have them so the project scope can be reviewed.</p>
              <div className="quote-contact"><Icon name="phone" size={26} /><span><small>CALL WHITE ROCK</small><a href="tel:+12764455990">(276) 445-5990</a></span></div>
            </div>
            <form className="quote-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="form-success" role="status"><div><Icon name="check" size={34} /></div><h3>Your project details are ready.</h3><p>This website preview still needs a destination email or CRM connected before requests can be delivered. Call <a href="tel:+12764455990">(276) 445-5990</a> in the meantime.</p><button type="button" onClick={() => setSubmitted(false)}>Submit another project</button></div>
              ) : (
                <>
                  <div className="form-heading"><span>PROJECT INQUIRY</span><small>Fields marked * are required</small></div>
                  <div className="form-grid">
                    <label><span>Name *</span><input type="text" name="name" placeholder="Your name" required /></label>
                    <label><span>Company</span><input type="text" name="company" placeholder="Company name" /></label>
                    <label><span>Email *</span><input type="email" name="email" placeholder="you@company.com" required /></label>
                    <label><span>Phone *</span><input type="tel" name="phone" placeholder="(000) 000-0000" required /></label>
                    <label><span>Project Type *</span><select name="projectType" required defaultValue=""><option value="" disabled>Select one</option><option>Residential</option><option>Commercial</option><option>Agricultural</option><option>Other</option></select></label>
                    <label><span>Project Location *</span><input type="text" name="location" placeholder="City, State" required /></label>
                    <label className="full-field"><span>Project Notes</span><textarea name="notes" placeholder="Tell us about the project, schedule, and component needs." rows="4" /></label>
                  </div>
                  <label className="file-upload"><input type="file" accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png" onChange={(event) => setFileName(event.target.files?.[0]?.name || '')} /><Icon name="upload" size={22} /><span><strong>{fileName || 'Attach project plans'}</strong><small>PDF, CAD, JPG, or PNG</small></span><b>{fileName ? 'CHANGE' : 'BROWSE'}</b></label>
                  <button className="button button-primary form-submit" type="submit">Send Project Request <Icon name="arrow" size={18} /></button>
                </>
              )}
            </form>
          </div>
        </section>
      ) : page.kind !== 'legal' && (
        <section className="interior-cta">
          <div className="container"><div><span>READY TO TALK?</span><h2>Bring us your next project.</h2></div><a className="button button-primary" href="/contractor-resources#quote">Request a Quote <Icon name="arrow" size={18} /></a></div>
        </section>
      )}
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')
  const path = window.location.pathname.length > 1 ? window.location.pathname.replace(/\/$/, '') : '/'
  const currentPage = interiorPages[path]

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    document.title = currentPage
      ? `${currentPage.eyebrow} | White Rock Truss & Components`
      : 'White Rock Truss & Components | Rose Hill, Virginia'
  }, [currentPage])

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="White Rock Truss & Components home" onClick={closeMenu}>
          <img src={logo} alt="White Rock Truss & Components, LLC" />
          <span className="brand-name"><strong>WHITE ROCK</strong><small>TRUSS & COMPONENTS</small></span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a className={path === '/about' ? 'active' : ''} href="/about" onClick={closeMenu}>About</a>
          <a className={path === '/truss-engineering' ? 'active' : ''} href="/truss-engineering" onClick={closeMenu}>Truss Systems</a>
          <a className={path === '/components' ? 'active' : ''} href="/components" onClick={closeMenu}>Components</a>
          <a className={path === '/contractor-resources' ? 'active' : ''} href="/contractor-resources" onClick={closeMenu}>Resources</a>
          <a className={path === '/projects' ? 'active' : ''} href="/projects" onClick={closeMenu}>Projects</a>
          <a className="nav-phone" href="tel:+12764455990"><Icon name="phone" size={18} /> (276) 445-5990</a>
          <a className="nav-cta" href="/contractor-resources#quote" onClick={closeMenu}>Request a Quote <Icon name="arrow" size={17} /></a>
        </nav>

        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </header>

      <main id="top">
        {currentPage ? (
          <InteriorPage page={currentPage} submitted={submitted} setSubmitted={setSubmitted} fileName={fileName} setFileName={setFileName} handleSubmit={handleSubmit} />
        ) : (
          <>
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-truss" aria-hidden="true">
            <svg viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice">
              <path d="M40 330 450 70l410 260M40 330h820M170 330 450 70l280 260M305 330 450 70l145 260M450 70v260" />
              <path className="thin" d="M40 352h820M40 362h820" />
            </svg>
          </div>
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Rose Hill, Virginia</div>
              <h1>Building strength<br />into every <em>span.</em></h1>
              <p>Truss engineering, component manufacturing, and jobsite-focused support for residential, commercial, and agricultural construction.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="/contractor-resources#quote">Start Your Quote <Icon name="arrow" size={18} /></a>
                <a className="button button-ghost" href="/truss-engineering">Explore Capabilities</a>
              </div>
            </div>

            <div className="hero-rail">
              <div className="hero-rail-line" />
              <span>ENGINEERED</span>
              <span>MANUFACTURED</span>
              <span>DELIVERED</span>
            </div>
          </div>

          <div className="hero-footer container">
            <div className="hero-stat">
              <Icon name="engineering" />
              <span><strong>Built from your plans</strong>Component packages aligned to the project.</span>
            </div>
            <div className="hero-stat">
              <Icon name="delivery" />
              <span><strong>Jobsite coordination</strong>Delivery planning for a smoother build.</span>
            </div>
            <a href="tel:+12764455990" className="hero-call"><small>Talk to the team</small><strong>(276) 445-5990</strong></a>
          </div>
        </section>

        <section className="intro-section section" id="about">
          <div className="container intro-layout">
            <div className="section-label"><span>01</span> BUILT FOR THE BUILDERS</div>
            <div className="intro-main">
              <p className="intro-lead">Your schedule depends on components that show up <strong>right.</strong></p>
              <p className="intro-copy">White Rock Truss & Components brings project plans, component manufacturing, and delivery coordination together under one roof in Rose Hill. We help contractors move from drawings to the jobsite with a clear, practical process.</p>
              <a className="text-link" href="/about">See our process <Icon name="arrow" size={18} /></a>
            </div>
            <aside className="location-card">
              <Icon name="pin" size={30} />
              <span>BASED IN</span>
              <strong>ROSE HILL, VA</strong>
              <p>Serving builders and project teams throughout the surrounding region.</p>
              <a href="/about">View service area <Icon name="arrow" size={16} /></a>
            </aside>
          </div>
        </section>

        <section className="services-section section dark-section" id="trusses">
          <div className="container">
            <div className="section-heading light-heading">
              <div>
                <div className="section-label"><span>02</span> TRUSS ENGINEERING & MANUFACTURING</div>
                <h2>Structural systems for the way you build.</h2>
              </div>
              <p>From straightforward packages to detailed custom profiles, our work starts with your project requirements and ends with components ready for the next phase of construction.</p>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon"><Icon name={service.icon} size={32} /></div>
                  <div className="service-title">
                    <h3>{service.title}</h3>
                    <span>{service.kicker}</span>
                  </div>
                  <p>{service.text}</p>
                  <a href="/contractor-resources#quote" aria-label={`Request a quote for ${service.title}`}><Icon name="arrow" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="components-section section" id="components">
          <div className="container components-layout">
            <div className="components-copy">
              <div className="section-label"><span>03</span> ENGINEERED LUMBER & COMPONENTS</div>
              <h2>More of the structural package. One dependable source.</h2>
              <p>Bring the moving parts of your framing package together. Ask our team to help coordinate compatible engineered lumber and connection components around your truss order.</p>
              <a className="button button-dark" href="/contractor-resources#quote">Discuss Your Material List <Icon name="arrow" size={18} /></a>
            </div>

            <div className="component-cards">
              {components.map(([title, text], index) => (
                <article className="component-card" key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <Icon name="arrow" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="media-feature" aria-label="Future facility video">
          <div className="media-placeholder">
            <div className="media-overlay" />
            <div className="blueprint-lines" aria-hidden="true" />
            <button type="button" className="play-button" aria-label="Facility video placeholder">
              <Icon name="play" size={34} />
            </button>
            <div className="media-caption">
              <span>FUTURE VIDEO PLACEMENT</span>
              <strong>Inside White Rock</strong>
              <p>Replace this area with facility, manufacturing, or company-story footage.</p>
            </div>
            <div className="media-index">WRT / FILM 01</div>
          </div>
        </section>

        <section className="process-section section" id="process">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-label"><span>04</span> PROCESS & QUALITY STANDARDS</div>
                <h2>A clearer path from plans to placement.</h2>
              </div>
              <p>Good projects run on good information. Our process keeps critical details visible from initial review through jobsite delivery.</p>
            </div>

            <div className="process-grid">
              {[
                ['01', 'Send Your Plans', 'Share project drawings, jobsite details, and your anticipated schedule.'],
                ['02', 'Project Review', 'The project scope and component requirements are reviewed with your team.'],
                ['03', 'Manufacturing', 'Approved designs move into an organized component manufacturing workflow.'],
                ['04', 'Delivery Coordination', 'We coordinate timing and site-readiness details before the truck arrives.'],
              ].map(([number, title, text]) => (
                <article className="process-card" key={number}>
                  <span>{number}</span>
                  <div className="process-marker"><i /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="standards-band">
              <Icon name="shield" size={38} />
              <div><strong>Quality begins before production.</strong><span>Clear inputs, careful review, and coordinated project information support a better component package.</span></div>
              <a href="/contractor-resources#quote">Talk through your project <Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </section>

        <section className="projects-section section dark-section" id="projects">
          <div className="container">
            <div className="section-heading light-heading">
              <div>
                <div className="section-label"><span>05</span> PROJECT GALLERY</div>
                <h2>Built across project types.</h2>
              </div>
              <p>Future completed-work photography will live here. These framed placeholders are ready for high-resolution project images.</p>
            </div>

            <div className="project-grid">
              {projects.map(([title, text, number], index) => (
                <article className={`project-card project-${index + 1}`} key={title}>
                  <div className="project-image-placeholder" role="img" aria-label={`${title} image placeholder`}>
                    <div className="project-schematic" aria-hidden="true">
                      <svg viewBox="0 0 500 300"><path d="M20 240 250 60l230 180M20 240h460M120 240 250 60l130 180M250 60v180" /></svg>
                    </div>
                    <span>IMAGE PLACEHOLDER / {number}</span>
                  </div>
                  <div className="project-info">
                    <div><h3>{title}</h3><p>{text}</p></div>
                    <Icon name="arrow" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="resources-section section" id="resources">
          <div className="container resources-layout">
            <div className="resources-copy">
              <div className="section-label"><span>06</span> CONTRACTOR RESOURCES</div>
              <h2>Information your team can use.</h2>
              <p>Keep project preparation moving with quick access to planning documents, submittal resources, and jobsite delivery guidance.</p>
            </div>
            <div className="resource-list">
              <a href="/contractor-resources#quote">
                <span className="resource-icon"><Icon name="upload" /></span>
                <span><strong>Request a Free Quote / Upload Plans</strong><small>Start a project conversation</small></span>
                <Icon name="arrow" />
              </a>
              <button type="button" onClick={() => alert('Span table PDF placeholder — add the approved guide here.') }>
                <span className="resource-icon"><Icon name="download" /></span>
                <span><strong>Truss Profiles & Span Tables</strong><small>PDF guide placeholder</small></span>
                <Icon name="download" />
              </button>
              <button type="button" onClick={() => alert('Delivery checklist PDF placeholder — add the approved checklist here.') }>
                <span className="resource-icon"><Icon name="delivery" /></span>
                <span><strong>Site Delivery Preparation Checklist</strong><small>PDF guide placeholder</small></span>
                <Icon name="download" />
              </button>
            </div>
          </div>
        </section>

        <section className="service-area-section" id="service-area">
          <div className="service-map" aria-hidden="true">
            <div className="map-grid" />
            <div className="map-route route-one" />
            <div className="map-route route-two" />
            <div className="map-pin"><span /><strong>ROSE HILL</strong></div>
          </div>
          <div className="service-area-copy">
            <div className="section-label"><span>07</span> SERVICE AREA & DELIVERY</div>
            <h2>Regional support, coordinated from Rose Hill.</h2>
            <p>Project location, access, load staging, and schedule all shape delivery planning. Contact our team to confirm availability and coordination details for your jobsite.</p>
            <a className="text-link" href="tel:+12764455990">Confirm your project location <Icon name="arrow" size={18} /></a>
          </div>
        </section>

        <section className="quote-section" id="quote">
          <div className="container quote-layout">
            <div className="quote-intro">
              <div className="section-label"><span>08</span> START A PROJECT</div>
              <h2>Bring us the plans.<br />We’ll help map the next step.</h2>
              <p>Tell us what you are building and where. Include drawings when you have them, and our team can begin reviewing the project scope.</p>
              <div className="quote-contact">
                <Icon name="phone" size={26} />
                <span><small>CALL WHITE ROCK</small><a href="tel:+12764455990">(276) 445-5990</a></span>
              </div>
            </div>

            <form className="quote-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="form-success" role="status">
                  <div><Icon name="check" size={34} /></div>
                  <h3>Your project details are ready.</h3>
                  <p>This website preview still needs a destination email or CRM connected before requests can be delivered. Call <a href="tel:+12764455990">(276) 445-5990</a> in the meantime.</p>
                  <button type="button" onClick={() => setSubmitted(false)}>Submit another project</button>
                </div>
              ) : (
                <>
                  <div className="form-heading"><span>PROJECT INQUIRY</span><small>Fields marked * are required</small></div>
                  <div className="form-grid">
                    <label><span>Name *</span><input type="text" name="name" placeholder="Your name" required /></label>
                    <label><span>Company</span><input type="text" name="company" placeholder="Company name" /></label>
                    <label><span>Email *</span><input type="email" name="email" placeholder="you@company.com" required /></label>
                    <label><span>Phone *</span><input type="tel" name="phone" placeholder="(000) 000-0000" required /></label>
                    <label><span>Project Type *</span><select name="projectType" required defaultValue=""><option value="" disabled>Select one</option><option>Residential</option><option>Commercial</option><option>Agricultural</option><option>Other</option></select></label>
                    <label><span>Project Location *</span><input type="text" name="location" placeholder="City, State" required /></label>
                    <label className="full-field"><span>Project Notes</span><textarea name="notes" placeholder="Tell us about the project, schedule, and component needs." rows="4" /></label>
                  </div>
                  <label className="file-upload">
                    <input type="file" accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png" onChange={(event) => setFileName(event.target.files?.[0]?.name || '')} />
                    <Icon name="upload" size={22} />
                    <span><strong>{fileName || 'Attach project plans'}</strong><small>PDF, CAD, JPG, or PNG</small></span>
                    <b>{fileName ? 'CHANGE' : 'BROWSE'}</b>
                  </label>
                  <button className="button button-primary form-submit" type="submit">Send Project Request <Icon name="arrow" size={18} /></button>
                </>
              )}
            </form>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-brand">
            <img src={logo} alt="White Rock Truss & Components, LLC" />
            <p>Truss engineering, manufacturing, and components for builders who expect the details to line up.</p>
          </div>
          <div className="footer-column"><h3>Capabilities</h3><a href="/truss-engineering">Roof Trusses</a><a href="/truss-engineering">Floor Trusses</a><a href="/truss-engineering">Specialty & Custom</a><a href="/components">Engineered Lumber</a></div>
          <div className="footer-column"><h3>Company</h3><a href="/about">About Us</a><a href="/about">Process & Quality</a><a href="/about">Service Area</a><a href="/projects">Project Gallery</a></div>
          <div className="footer-column footer-contact"><h3>Contact</h3><a href="/contact">Rose Hill, Virginia</a><a href="tel:+12764455990">(276) 445-5990</a><a className="footer-cta" href="/contractor-resources#quote">Request a Quote <Icon name="arrow" size={16} /></a></div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} White Rock Truss & Components, LLC</span>
          <div><a href="/legal#privacy">Privacy Policy</a><a href="/legal#terms">Terms & Conditions</a></div>
          <span>ROSE HILL, VA</span>
        </div>
      </footer>
    </div>
  )
}

export default App

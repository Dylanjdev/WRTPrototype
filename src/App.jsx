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
    metaTitle: 'About White Rock Truss | Rose Hill, VA Manufacturer',
    metaDescription: 'Learn about White Rock Truss & Components, a Rose Hill, Virginia truss manufacturer serving builders with engineered wood products since 2005.',
    seoTitle: 'A Southwest Virginia truss manufacturer built to support builders',
    seoIntro: 'Established in Lee County in 2005, White Rock Truss & Components has grown around a straightforward purpose: help builders move from construction plans to coordinated structural components. From our Rose Hill manufacturing operation, we work with residential contractors, commercial project teams, agricultural builders, and home improvement retailers that need dependable information and a practical ordering process.',
    seoBlocks: [
      ['Manufacturing rooted in Rose Hill, Virginia', 'White Rock Truss & Components operates at 21437 Wilderness Road in Rose Hill, Virginia. Being based in the heart of Southwest Virginia gives our team a direct connection to the contractors, suppliers, and communities building across the region. Customers can speak with a real project team about roof trusses, floor trusses, engineered lumber, hardware, and coordinated delivery requirements.'],
      ['A process designed around construction documents', 'Every successful component package begins with clear information. The White Rock process starts with plans, spans, loading criteria, building dimensions, project location, and anticipated timing. That information supports project review, component planning, approvals, manufacturing, and delivery coordination. Keeping those steps connected helps builders identify questions early and prepare the jobsite before components arrive.'],
      ['Continuing to invest in regional manufacturing', 'White Rock has continued to invest in its Lee County operation. A 2025 expansion added momentum to the company’s manufacturing capacity and regional employment. That growth reflects a long-term commitment to producing construction products and engineered lumber in Southwest Virginia while supporting the contractors and retailers that depend on those materials.'],
    ],
    faqs: [
      ['When was White Rock Truss & Components established?', 'White Rock Truss & Components was established in Lee County, Virginia, in 2005.'],
      ['Where is White Rock Truss located?', 'The company is located at 21437 Wilderness Road, Rose Hill, VA 24281.'],
      ['Who does White Rock Truss work with?', 'White Rock supports residential construction companies, commercial and agricultural builders, contractors, and home improvement retailers. Project fit and delivery availability are confirmed during the quote process.'],
      ['How does a truss project get started?', 'Send available construction plans, project location, contact information, and schedule details. The team will review the scope and identify any additional information needed for quoting.'],
    ],
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
    metaTitle: 'Roof & Floor Truss Manufacturer | White Rock Truss VA',
    metaDescription: 'Explore roof trusses, open-web floor trusses, and custom timber truss solutions manufactured by White Rock Truss in Rose Hill, Virginia.',
    seoTitle: 'Roof and floor truss manufacturing for residential, commercial, and agricultural construction',
    seoIntro: 'White Rock Truss & Components manufactures structural wood truss systems from its Rose Hill, Virginia facility. Our team works from project drawings and required building information to develop component packages for new homes, multi-family projects, commercial buildings, barns, agricultural structures, additions, and other wood-framed construction.',
    seoBlocks: [
      ['Roof trusses planned around the building', 'A roof truss package must account for more than overall span. Pitch, heel height, overhangs, bearing conditions, roof openings, loading criteria, gable conditions, and architectural transitions all affect the final system. White Rock reviews the available plans and project information so the roof trusses can be coordinated around the intended building geometry and construction sequence.'],
      ['Open-web floor trusses for flexible building systems', 'Open-web floor trusses create accessible pathways for plumbing, electrical, and mechanical work while supporting long, consistent floor layouts. They can be useful in residential and light-commercial construction where service coordination and floor depth matter. Required span, spacing, depth, bearing locations, and loading information should be included with the project plans.'],
      ['Specialty profiles and custom timber applications', 'Complex rooflines, vaulted areas, attic conditions, agricultural buildings, and distinctive timber features may require a more collaborative review. Share architectural plans, structural information, reference details, and known field conditions early. The team can then evaluate the requested profiles and confirm whether the project fits White Rock’s manufacturing capabilities.'],
      ['Information that helps produce an accurate truss quote', 'For the best starting point, provide a complete plan set, building location, wall and bearing layout, roof pitch, overhangs, desired spacing, loading requirements, and target schedule. If the plans are still developing, call the team to discuss which documents are ready and what information should follow.'],
    ],
    faqs: [
      ['What types of roof trusses does White Rock manufacture?', 'White Rock works with roof truss packages for residential, commercial, and agricultural construction. Final availability depends on the project design, loading, dimensions, and manufacturing scope.'],
      ['What is an open-web floor truss?', 'An open-web floor truss is a wood structural component with open spaces through the web, allowing many mechanical, electrical, and plumbing services to pass through the floor system.'],
      ['Can White Rock review custom or specialty truss designs?', 'Yes. Submit the architectural and structural information for review. The team will evaluate the requested geometry and confirm project fit.'],
      ['What files should I send for a truss quote?', 'PDF construction plans are a useful starting point. Include contact information, the project address, expected schedule, and any available structural criteria or component specifications.'],
    ],
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
    metaTitle: 'Engineered Lumber, LVL & I-Joists | Rose Hill, VA',
    metaDescription: 'Coordinate I-joists, LVL beams, hardware, hangers, and available wall components with White Rock Truss & Components in Rose Hill, VA.',
    seoTitle: 'Engineered lumber and building components coordinated with your truss package',
    seoIntro: 'A framing package often involves more than roof and floor trusses. White Rock Truss & Components helps customers coordinate engineered wood products and compatible connection hardware alongside the primary truss order. Bringing these materials into the same project conversation can simplify takeoffs, reduce product mismatches, and give the jobsite a clearer picture of what will arrive.',
    seoBlocks: [
      ['I-joists for consistent floor framing', 'Wood I-joists are commonly used for floor and roof framing where consistent dimensions, long lengths, and efficient installation are important. Product selection depends on span, spacing, depth, loading, and the layout shown in the construction documents. Provide the floor plans and known framing criteria so available I-joist options can be reviewed with the rest of the component package.'],
      ['LVL beams for concentrated structural requirements', 'Laminated veneer lumber, commonly called LVL, is an engineered wood product used for beams, headers, rim conditions, and other structural applications. Required size and specification must come from the project design. White Rock can help coordinate the listed LVL material with trusses, I-joists, and related framing components.'],
      ['Hardware and hangers that match the application', 'Hangers, ties, and other connectors are small parts with an important role. Connection hardware should match the component type, loading, bearing condition, and project details. Including the required hardware in the material review helps the builder prepare for installation and reduces last-minute sourcing at the jobsite.'],
      ['Wall component availability', 'Wall panel needs vary by project and production schedule. If prefabricated wall components are part of your building plan, include them in the initial inquiry. The White Rock team will confirm current availability, required information, and whether the requested wall package fits the project scope.'],
    ],
    faqs: [
      ['Does White Rock supply I-joists and LVL beams?', 'White Rock coordinates engineered lumber options, including I-joists and LVL products, based on project requirements and current availability.'],
      ['Can hardware and hangers be included with a truss order?', 'Compatible connection hardware can be reviewed as part of the component package. The required products depend on the approved project details.'],
      ['What information is needed for engineered lumber?', 'Provide floor and roof plans, structural notes, spans, spacing, loading criteria, and specified product information when available.'],
      ['Are wall panels available for every project?', 'Wall component availability is project-specific. Ask the team to review the requested wall package with your plans and schedule.'],
    ],
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
    metaTitle: 'Request a Truss Quote & Upload Plans | White Rock',
    metaDescription: 'Request a roof or floor truss quote, upload construction plans, and find contractor delivery resources from White Rock Truss in Rose Hill, VA.',
    seoTitle: 'Request a truss quote and prepare your project for production',
    seoIntro: 'The quality of a truss or component quote depends on the quality of the project information provided. This contractor resource center gives builders, estimators, project managers, and homeowners a direct place to send plans, outline the requested scope, and prepare for later delivery coordination.',
    seoBlocks: [
      ['Start with the most complete plan set available', 'Architectural floor plans, roof plans, elevations, sections, and structural notes help define the component scope. Include the project address, building use, contact information, and anticipated construction schedule. If there are revisions, identify the current drawing date so the team knows which documents should guide the quote.'],
      ['Include the details that affect truss pricing', 'Roof pitch, spans, wall and bearing locations, overhangs, truss spacing, floor depth, openings, loading requirements, hangers, and specialty conditions may all affect a quote. Some of these items appear in the plan set; others may need to be supplied separately. Clear notes reduce follow-up questions and help the review move efficiently.'],
      ['Plan for delivery before the truck is scheduled', 'A component delivery requires appropriate road access, a stable unloading or staging area, and room for the delivery equipment to operate. Overhead lines, narrow entrances, steep grades, soft ground, traffic, and limited turning space should be discussed in advance. Delivery availability and site requirements are confirmed for each order.'],
      ['Keep revisions and approvals organized', 'Construction documents often change. Send revised sheets promptly and clearly identify what changed. Before production, confirm that the project information, quantities, dimensions, profiles, and delivery details reflect the current build. The final approved package should be the shared reference for the contractor and manufacturer.'],
    ],
    faqs: [
      ['How do I request a truss quote?', 'Complete the project inquiry form, attach available plans, and include the project location, building type, contact information, and expected schedule. You can also email plans to Quotes@WhiteRockTruss.com.'],
      ['Which file types can I upload?', 'The website form is prepared for PDF, DWG, DXF, JPG, JPEG, and PNG files. The final form connection must be configured before online uploads can be delivered.'],
      ['How long does a quote take?', 'Quote timing varies with project size, plan completeness, complexity, current workload, and the need for additional information. Call the team for current scheduling.'],
      ['What should be ready before truss delivery?', 'Confirm road access, unloading space, ground conditions, overhead clearance, staging location, and an authorized jobsite contact. Discuss unusual access conditions before delivery is scheduled.'],
    ],
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
    metaTitle: 'Truss Project Gallery | Residential & Commercial Work',
    metaDescription: 'Explore residential, commercial, and agricultural truss project categories from White Rock Truss & Components in Rose Hill, Virginia.',
    seoTitle: 'Wood truss and structural component projects across multiple building types',
    seoIntro: 'Every building asks something different of its structural components. White Rock Truss & Components works across residential, commercial, and agricultural construction, coordinating truss and engineered lumber packages around the plans, building use, and jobsite requirements. This gallery framework will document that range as completed-project photography is added.',
    seoBlocks: [
      ['Residential roof and floor systems', 'Residential projects can range from straightforward single-story homes to multi-level plans with intersecting rooflines, vaulted rooms, porches, garages, and open floor layouts. A strong project gallery should show both the overall building and the component details that helped create its final form.'],
      ['Commercial and light-commercial construction', 'Commercial component packages may involve broader footprints, repeated framing conditions, schedule coordination, and close alignment with architectural and structural documents. Future case studies can identify the building type, component scope, coordination considerations, and delivery sequence without disclosing private customer information.'],
      ['Barns and agricultural buildings', 'Agricultural construction often calls for open interior space, practical roof geometry, durable materials, and a component package suited to the building’s intended use. Barns, storage buildings, equipment shelters, and other rural structures can demonstrate the range of roof truss applications.'],
      ['What to include in a completed-project case study', 'Useful project stories go beyond a finished exterior photograph. Wide jobsite views, installed trusses, connection details, delivery images, and concise notes about the component scope give contractors a clearer understanding of the work. All future gallery content should use approved project information and image permissions.'],
    ],
    faqs: [
      ['What types of projects does White Rock Truss support?', 'The company works with residential, commercial, and agricultural construction. Project fit depends on the plans, location, schedule, and requested component scope.'],
      ['Will this gallery include active construction photos?', 'The page is prepared for both completed-building photography and approved in-progress images that show truss installation or component details.'],
      ['Can contractors submit project photos?', 'Contractors can contact White Rock about approved project photography. Any customer, project, or location details should be cleared before publication.'],
      ['How can I request a quote for a similar project?', 'Use the contractor resource page to upload plans and describe the project type, location, schedule, and required components.'],
    ],
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
    metaTitle: 'Contact White Rock Truss | Rose Hill, Virginia',
    metaDescription: 'Contact White Rock Truss & Components at 21437 Wilderness Road, Rose Hill, VA. Call (276) 445-5990 or email plans for a quote.',
    seoTitle: 'Contact a truss manufacturer in Rose Hill, Virginia',
    seoIntro: 'White Rock Truss & Components is located at 21437 Wilderness Road in Rose Hill, Virginia. Contractors, builders, retailers, and project owners can call during weekday business hours to discuss roof trusses, floor trusses, engineered lumber, hardware, component availability, quoting requirements, and delivery planning.',
    seoBlocks: [
      ['Call or visit White Rock Truss', 'The office is open Monday through Friday from 8:00 a.m. to 5:00 p.m. Call (276) 445-5990 before visiting to confirm the right project contact is available. The Rose Hill facility is closed Saturday and Sunday.'],
      ['Email plans for a project quote', 'Send available construction drawings and quote information to Quotes@WhiteRockTruss.com. Include your name, company, phone number, project address, requested component scope, and target schedule. Large or specialized files may require a coordinated transfer method.'],
      ['Discuss project location and delivery access', 'White Rock reviews delivery availability by project. Provide the complete jobsite address and describe access limitations such as narrow roads, steep grades, overhead utilities, limited turning space, soft ground, or special staging requirements. Confirming those conditions early helps the team plan appropriately.'],
      ['Ask the right questions early', 'If you are unsure which plans or specifications to send, call before submitting. A short conversation can clarify the requested truss type, engineered lumber needs, drawing status, decision timeline, and the information required for the next step.'],
    ],
    faqs: [
      ['What is White Rock Truss’s phone number?', 'Call White Rock Truss & Components at (276) 445-5990.'],
      ['What is the company address?', 'White Rock Truss & Components is located at 21437 Wilderness Road, Rose Hill, VA 24281.'],
      ['What are the business hours?', 'The office is open Monday through Friday from 8:00 a.m. to 5:00 p.m. and closed Saturday and Sunday.'],
      ['Where should I email construction plans?', 'Send quote plans and project information to Quotes@WhiteRockTruss.com.'],
    ],
    media: 'OFFICE / TEAM IMAGE PLACEHOLDER',
    kind: 'contact',
    sections: [
      ['Call the Team', '(276) 445-5990 — the direct starting point for questions, project fit, and scheduling conversations.', 'phone'],
      ['Visit in Rose Hill, Virginia', '21437 Wilderness Road, Rose Hill, VA 24281. Open Monday through Friday from 8:00 a.m. to 5:00 p.m.', 'pin'],
      ['Email Project Plans', 'Send project details and available drawing files to Quotes@WhiteRockTruss.com for quote review.', 'upload'],
    ],
    callout: 'Business hours, a street address, and a destination email can be added here once confirmed.',
  },
  '/legal': {
    number: '08 / 08',
    nav: 'Legal',
    eyebrow: 'Privacy & Terms',
    title: 'Clear policies for a professional website.',
    intro: 'This page provides structured placeholders for the final privacy policy and terms and conditions. The approved legal language should be reviewed before the site goes live publicly.',
    metaTitle: 'Privacy Policy & Website Terms | White Rock Truss',
    metaDescription: 'Review the website privacy notice and terms for White Rock Truss & Components, including project inquiries and uploaded construction plans.',
    seoTitle: 'Website privacy, project files, and terms of use',
    seoIntro: 'White Rock Truss & Components respects the importance of the contact information, construction plans, and project details submitted through its website. The following draft content explains the intended handling of website inquiries and establishes basic terms for using online information. It must be reviewed against the final form provider, analytics setup, and company procedures before public launch.',
    seoBlocks: [
      ['Information submitted through the website', 'The website may collect information that a visitor chooses to provide, including a name, company, email address, phone number, project location, project notes, and uploaded construction documents. Basic technical information may also be collected by the hosting or analytics provider when those services are enabled.'],
      ['How inquiry information may be used', 'Submitted information may be used to respond to questions, evaluate a project inquiry, prepare or discuss a quote, coordinate documents, communicate about products or services, improve website performance, and maintain business records. Online submission does not create a contract or guarantee acceptance, pricing, production, or delivery.'],
      ['Project plans and document handling', 'Construction plans may contain confidential or project-specific information. Visitors should submit only documents they are authorized to share. White Rock should define retention, access, deletion, and third-party file-transfer procedures before enabling live uploads. Sensitive personal, financial, or protected information should not be included in website submissions.'],
      ['Website content and project decisions', 'Website content is general business information and is not a substitute for project-specific architectural, structural, engineering, code, installation, or legal advice. Product availability, specifications, pricing, lead times, delivery, and project acceptance must be confirmed directly in the applicable quote, approval, or agreement.'],
    ],
    faqs: [
      ['Does submitting a form create an order?', 'No. A website inquiry or file upload is only a request for contact or review. Orders, pricing, scope, approvals, and delivery are governed by separate project documents.'],
      ['Should sensitive information be included with uploaded plans?', 'Do not submit financial account data, government identification numbers, medical information, or other sensitive personal information through the project form.'],
      ['Are website specifications final for construction?', 'No. Website descriptions are general. Use the approved project documents, manufacturer information, and applicable professional guidance for construction decisions.'],
      ['Who should review this legal page?', 'The company should have qualified legal counsel review the final privacy notice and terms based on the actual website tools and business procedures.'],
    ],
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

const homeSeo = {
  metaTitle: 'White Rock Truss & Components | Rose Hill, VA',
  metaDescription: 'Roof trusses, floor trusses, engineered lumber, and building components manufactured in Rose Hill, Virginia. Request a quote from White Rock Truss.',
  seoTitle: 'Truss manufacturing and engineered building components in Rose Hill, Virginia',
  seoIntro: 'White Rock Truss & Components manufactures roof trusses, open-web floor trusses, and structural building components from its Rose Hill facility in Lee County, Virginia. Since 2005, the company has supplied construction products and engineered lumber to residential contractors, commercial and agricultural builders, and home improvement retailers.',
  seoBlocks: [
    ['Roof trusses made from project plans', 'Residential, commercial, and agricultural roof truss packages begin with the building plans and required project information. Pitch, span, overhangs, bearing locations, openings, loading criteria, and specialty conditions are reviewed as part of the component scope.'],
    ['Floor trusses and engineered lumber', 'Open-web floor trusses can provide useful pathways for mechanical, electrical, and plumbing systems. I-joists, LVL beams, hangers, and other engineered components may also be coordinated around the project requirements and current availability.'],
    ['Contractor-focused quoting and delivery planning', 'Builders can submit construction plans, project details, and schedule information for review. As the order develops, delivery location, site access, staging space, and timing are coordinated with the customer.'],
    ['A growing Southwest Virginia manufacturer', 'White Rock has continued investing in its Lee County manufacturing operation. The company’s recent expansion reflects its long-term commitment to regional production, construction customers, and skilled manufacturing work in Southwest Virginia.'],
  ],
  faqs: [
    ['Where is White Rock Truss & Components located?', 'White Rock Truss is located at 21437 Wilderness Road, Rose Hill, Virginia 24281.'],
    ['What products does White Rock manufacture and supply?', 'The company works with roof trusses, open-web floor trusses, engineered lumber, compatible hardware, and other available structural building components.'],
    ['How do I get a quote?', 'Send construction plans and project information through the contractor resources page, email Quotes@WhiteRockTruss.com, or call (276) 445-5990.'],
    ['Does White Rock deliver to my area?', 'Delivery availability depends on the project location, order, site access, and schedule. Contact the team with the complete jobsite address for confirmation.'],
  ],
}

function SeoContent({ content, pageKind }) {
  return (
    <>
      <section className="seo-content-section section">
        <div className="container seo-content-layout">
          <div className="seo-content-heading">
            <div className="section-label"><span>PROJECT KNOWLEDGE</span> WHITE ROCK TRUSS</div>
            <h2>{content.seoTitle}</h2>
            <p>{content.seoIntro}</p>
          </div>
          <div className="seo-copy-grid">
            {content.seoBlocks.map(([title, text], index) => (
              <article key={title} id={pageKind === 'legal' && index === 0 ? 'privacy' : pageKind === 'legal' && index === 3 ? 'terms' : undefined}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <nav className="seo-related-links" aria-label="Related pages">
            <span>EXPLORE WHITE ROCK</span>
            <a href="/truss-engineering">Truss Systems <Icon name="arrow" size={16} /></a>
            <a href="/components">Engineered Components <Icon name="arrow" size={16} /></a>
            <a href="/contractor-resources#quote">Request a Quote <Icon name="arrow" size={16} /></a>
            <a href="/contact">Contact the Team <Icon name="arrow" size={16} /></a>
          </nav>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container faq-layout">
          <div className="faq-heading">
            <div className="section-label"><span>FAQ</span> COMMON QUESTIONS</div>
            <h2>What builders ask.</h2>
            <p>Quick answers about working with White Rock Truss & Components.</p>
          </div>
          <div className="faq-list">
            {content.faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>{question}</span><b>+</b></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
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

      <SeoContent content={page} pageKind={page.kind} />

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
    const seo = currentPage || homeSeo
    document.title = seo.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo.metaTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.metaDescription)
    const canonicalPath = currentPage ? path : '/'
    const canonicalUrl = `https://www.whiterocktruss.com${canonicalPath}`
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
  }, [currentPage, path])

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
          <div className="service-map">
            <iframe
              src="https://www.google.com/maps?q=21437+Wilderness+Road,+Rose+Hill,+VA+24281&output=embed"
              title="Google Map showing White Rock Truss & Components at 21437 Wilderness Road in Rose Hill, Virginia"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="map-open-link" href="https://www.google.com/maps/search/?api=1&query=21437+Wilderness+Road%2C+Rose+Hill%2C+VA+24281" target="_blank" rel="noreferrer">
              Open in Google Maps <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="service-area-copy">
            <div className="section-label"><span>07</span> SERVICE AREA & DELIVERY</div>
            <h2>Regional support, coordinated from Rose Hill.</h2>
            <p>Project location, access, load staging, and schedule all shape delivery planning. Contact our team to confirm availability and coordination details for your jobsite.</p>
            <a className="text-link" href="tel:+12764455990">Confirm your project location <Icon name="arrow" size={18} /></a>
          </div>
        </section>

        <SeoContent content={homeSeo} />

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
          <div className="footer-column footer-contact"><h3>Contact</h3><a href="/contact">21437 Wilderness Road<br />Rose Hill, VA 24281</a><a href="tel:+12764455990">(276) 445-5990</a><a href="mailto:Quotes@WhiteRockTruss.com">Quotes@WhiteRockTruss.com</a><a className="footer-cta" href="/contractor-resources#quote">Request a Quote <Icon name="arrow" size={16} /></a></div>
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

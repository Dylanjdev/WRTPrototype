import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const routes = [
  { route: 'about', title: 'About White Rock Truss | Rose Hill, VA Manufacturer', description: 'Learn about White Rock Truss & Components, a Rose Hill, Virginia truss manufacturer serving builders with engineered wood products since 2005.' },
  { route: 'truss-engineering', title: 'Roof & Floor Truss Manufacturer | White Rock Truss VA', description: 'Explore roof trusses, open-web floor trusses, and custom timber truss solutions manufactured by White Rock Truss in Rose Hill, Virginia.' },
  { route: 'components', title: 'Engineered Lumber, LVL & I-Joists | Rose Hill, VA', description: 'Coordinate I-joists, LVL beams, hardware, hangers, and available wall components with White Rock Truss & Components in Rose Hill, VA.' },
  { route: 'contractor-resources', title: 'Request a Truss Quote & Upload Plans | White Rock', description: 'Request a roof or floor truss quote, upload construction plans, and find contractor delivery resources from White Rock Truss in Rose Hill, VA.' },
  { route: 'projects', title: 'Truss Project Gallery | Residential & Commercial Work', description: 'Explore residential, commercial, and agricultural truss project categories from White Rock Truss & Components in Rose Hill, Virginia.' },
  { route: 'careers', title: 'Careers & Employment Applications | White Rock Truss', description: 'Explore career interest areas and submit a general employment application to White Rock Truss & Components in Rose Hill, Virginia.' },
  { route: 'contact', title: 'Contact White Rock Truss | Rose Hill, Virginia', description: 'Contact White Rock Truss & Components at 21437 Wilderness Road, Rose Hill, VA. Call (276) 445-5990 or email plans for a quote.' },
  { route: 'legal', title: 'Privacy Policy & Website Terms | White Rock Truss', description: 'Review the website privacy notice and terms for White Rock Truss & Components, including project inquiries and uploaded construction plans.' },
]

const source = await readFile('dist/index.html', 'utf8')

await Promise.all(routes.map(async ({ route, title, description }) => {
  const directory = join('dist', route)
  const url = `https://www.whiterocktruss.com/${route}`
  const page = source
    .replace('<title>White Rock Truss & Components | Rose Hill, VA</title>', `<title>${title}</title>`)
    .replace('content="Roof trusses, floor trusses, engineered lumber, and building components manufactured in Rose Hill, Virginia. Request a quote from White Rock Truss."', `content="${description}"`)
    .replace('content="White Rock Truss & Components | Rose Hill, VA"', `content="${title}"`)
    .replace('content="Roof trusses, floor trusses, engineered lumber, and building components manufactured in Rose Hill, Virginia. Request a quote from White Rock Truss."', `content="${description}"`)
    .replace('content="https://www.whiterocktruss.com/"', `content="${url}"`)
    .replace('href="https://www.whiterocktruss.com/"', `href="${url}"`)
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), page)
}))

console.log(`Generated ${routes.length} interior page entry points.`)

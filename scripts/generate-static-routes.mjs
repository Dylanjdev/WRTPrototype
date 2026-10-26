import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const routes = [
  ['about', 'About Us'],
  ['truss-engineering', 'Truss Engineering & Manufacturing'],
  ['components', 'Engineered Lumber & Components'],
  ['contractor-resources', 'Contractor Resources & Forms'],
  ['projects', 'Project Gallery'],
  ['contact', 'Contact Us'],
  ['legal', 'Privacy & Terms'],
]

const source = await readFile('dist/index.html', 'utf8')

await Promise.all(routes.map(async ([route, title]) => {
  const directory = join('dist', route)
  const page = source.replace(
    '<title>White Rock Truss & Components | Rose Hill, Virginia</title>',
    `<title>${title} | White Rock Truss & Components</title>`,
  )
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), page)
}))

console.log(`Generated ${routes.length} interior page entry points.`)

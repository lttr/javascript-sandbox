const exampleUrl = "https://example.com"
const exampleUrlSlash = `${exampleUrl}/`
const examplePath = "foo"
const exampleSlashPath = `/${examplePath}`
const exampleFullPath = `${exampleUrl}/${examplePath}`
const exampleFullPathSlash = `${exampleFullPath}/`
const exampleFullPathWithQuery = `${exampleUrl}/${examplePath}?baz=quax`

const objectExampleUrl = new URL("https://example.com")
const objectExampleUrlSlash = new URL(`${exampleUrl}/`)
try {
  const objectExamplePath = new URL("foo")
} catch (e) {
  console.error(e.message)
}
try {
  const objectExampleSlashPath = new URL(`/${examplePath}`)
} catch (e) {
  console.error(e.message)
}
const objectExampleFullPath = new URL(`${exampleUrl}/${examplePath}`)
const objectExampleFullPathSlash = new URL(`${exampleFullPath}/`)

console.log()
console.log(
  `'origin' does not contain trailing slash: '${objectExampleUrlSlash.origin}'`
)
console.log(
  `'pathname' contains leading slash and trailing slash if it was provided: '${objectExampleFullPathSlash.pathname}'`
)

console.log()
console.log(
  "Any extra or missing slashes between path and url base will be normalized:"
)
console.log(new URL(examplePath, exampleUrl).href)
console.log(new URL(exampleSlashPath, exampleUrl).href)
console.log(new URL(examplePath, exampleUrlSlash).href)
console.log(new URL(exampleSlashPath, exampleUrlSlash).href)

console.log()
console.log("Concatenation of a path with base url:")
console.log(new URL("bar", exampleFullPathSlash).href)
console.log(
  "You have to make sure, that the last segment of the base ends with slash if it is meant to be not only a domain:"
)
console.log(
  new URL("bar", makeSureThatSlashIsAtTheEnd(exampleFullPathWithQuery)).href
)
console.log("Otherwise, it will be one level above!")
console.log(new URL("bar", exampleFullPath).href)
console.log(
  "The first argument to URL constructor has to be relative path, not absolute like '/bar':"
)
console.log(new URL("/bar", exampleFullPathSlash).href)

function makeSureThatSlashIsAtTheEnd(url) {
  const objectUrl = new URL(url)
  objectUrl.pathname = objectUrl.pathname.replace(/\/?$/, "/")
  console.log(
    `...making sure that url's ${url} path segment ends with a slash: ${objectUrl}`
  )
  return objectUrl.toString()
}

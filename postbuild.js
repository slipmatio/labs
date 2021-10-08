// @ts-check
var fs = require('fs')

function renameHash() {
  const regex = /(main.)(\w+)(.css)/i
  const manifest = JSON.parse(fs.readFileSync('dist/manifest.json').toString())
  const indexContent = fs.readFileSync('templates/index.html').toString()
  const fromPath = manifest['src/main.js']['css'][0]
  const toPath = fromPath.replace('assets/', 'static/')
  const newHash = fromPath.split('.')[1]
  const oldHash = indexContent.match(regex)[2]

  if (newHash === oldHash) {
    console.log("Style hash hasn't changed.")
    return
  } else {
    console.log('oldHash', oldHash)
    console.log('newHash', newHash)
    console.log(`Copying ${fromPath} to ${toPath}`)
    fs.rmSync(`static/main.${oldHash}.css`)
    fs.copyFileSync('dist/' + fromPath, toPath)
    fs.writeFileSync(
      'templates/index.html',
      indexContent.replace(/(main.)(\w+)(.css)/i, `$1${newHash}$3`)
    )
    console.log(`Deleted old css file with hash ${newHash}`)
    console.log(`Replaced old hash in template with ${newHash}`)
  }
}
renameHash()

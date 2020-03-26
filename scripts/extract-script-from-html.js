const doc =`Usage:
  extract-script-from-html.js <slides_html>`
 
const fs = require('fs')  
const cheerio = require('cheerio')
const options = require('docopt').docopt(doc)

const $ = cheerio.load(fs.readFileSync(options["<slides_html>"]))

$("section").each( (slideIndex, slideElement) => {
    // console.log( slideIndex, slideElement )
    textForSlide = []
    $(slideElement).find(".speak, .speak-only").each( (_, el) => {
        textForSlide.push( $(el).text().replace( /\n/g, " " ) )
    })
    console.log( textForSlide.join( ". " ) )
})
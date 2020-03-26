const { rule } = require('jake');
const exec = require('child_process').execSync;

/** Build CSS to be used by Marp HTML presentations */
rule('dist/%.css', 'lib/%.scss', function() {
  exec(`node-sass \
          --importer node_modules/node-sass-package-importer/dist/cli.js \
          ${this.source} > ${this.name}`);
});

/** Build slides HTML or PDF from Markdown with Marp */
["html", "pdf"].forEach( type =>
  rule(`dist/%-slides.${type}`, 'src/%.md', ['dist/local.css'], function() {
    exec(` marp --engine ./lib/marp-engine.js \
            --theme dist/local.css \
            --html ${this.source} -o ${this.name} 2>&1`)
  })
);

/** Build slide images */
rule(`dist/%-slides.001.png`, 'src/%.md', ['dist/local.css'], function() {
  let dest = this.name.replace(".001", "");
  exec(` marp --engine ./lib/marp-engine.js \
          --theme dist/local.css \
          --html ${this.source} --images png -o ${dest} 2>&1`)
})  


/** Default task: build HTML files */
task('default', ['dist/sars2-biology-slides.html']);
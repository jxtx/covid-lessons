const chromium = require('chrome-aws-lambda')
const marpCLI = require('@marp-team/marp-cli/lib/marp-cli.js')

async function beforeMarp() {
  // If we are running in AWS (or faking it) use the chromium from
  // `chrome-aws-lambda`
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
    process.env.CHROME_PATH = await chromium.executablePath
  }
}

beforeMarp().then(function () {
  marpCLI
    .default(process.argv.slice(2))
    .then((exitCode) => process.on('exit', () => process.exit(exitCode)))
})

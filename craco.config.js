const path = require('path')
const resolve = pathname => path.resolve(__dirname, pathname)
const CracoLessPlugin = require("craco-less")

module.exports = {
  plugins: [
    // less
    {
      plugin: CracoLessPlugin
    }
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils"),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}

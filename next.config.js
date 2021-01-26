
  // next.config.js
/*
 * Let's reuse the client configuration. I have rewritten
 * it as a CommonJS module just to make it runs in a Node
 * environment without any fuzz.
 */



module.exports = {
  pageExtensions: ['mdx', 'jsx', 'js'],

  // Make sure that your node enviroment supports async/await
  exportPathMap: async function (defaultPathMap) {
  
    const path = {
      "/": { 
        page: "/" 
      }
    }
    return path
  }
}
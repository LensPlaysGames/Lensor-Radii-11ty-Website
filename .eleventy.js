module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('audio')
    eleventyConfig.addPassthroughCopy('favicon.png')
    return {
        passthroughFileCopy: true
    }
}
module.exports = function(eleventyConfig) {

    // Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `docs/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/"
	});

    // Set custom directories for input, output, includes, and data
    return {
        dir: {
            input: "content",          // default: "."
            includes: "../_includes",  // default: "_includes"
            data: "../_data",          // default: "_data"
            output: "docs"
        }
    };
};

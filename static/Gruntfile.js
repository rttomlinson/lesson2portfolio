module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.initConfig({
		responsive_images: {
			dev: {
			  options: {
				  engine:'im',
			        sizes:[{
						name: "main-large",
						width: 1200,
						quality: 60,
						suffix: "1200w"
					},{
					    name: "main-medium",
						width: 800,
						quality: 60,
						suffix: "800w"
					},{
					    name: "main-small",
						width: 400,
						quality: 60,
						suffix: "400w"
					},{
					    name: "main-xsmall",
						width: 200,
						quality: 60,
						suffix: "200w"
					}]
				},
			  files: [{
				expand:true,
				src:['climbing-portrait.{gif,png,jpg}'],
				cwd:'images_src/',
				dest:'images/'
			}]
		  }
		}
	});
	grunt.registerTask('default', ['responsive_images']);
};
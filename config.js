/*
 * Create and export configuration variables
 *
 */
 
 // Container for all the environments
 var environments = {};
 
 // Staging (default) environments
 environments.staging = {
	 'httpPort' : 3000,
	 'httpsPort' : 3001,
	 'envName' : 'staging'
 };
 
 //Production environment
 environments.production = {
	 'httpPort' : 5000,
	 'httpsPort' : 5001,
	 'envName' : 'production'
 };
 
 // Determine which environment was passed as a command-line argument
 var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

 //Check that current envieronment is one of the environments above, if not, gefault to staging
 var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
 
 //Export the module
module.exports = environmentToExport;


 
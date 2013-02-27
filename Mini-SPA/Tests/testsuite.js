(function () {

	// Defer Qunit so RequireJS can work its magic and resolve all modules.
	QUnit.config.autostart = false;

	var root = this;

	require.config(
        {
        	// Let require.js load all app/custom modules asynchronously as needed.
        	// They are all in this folder.
        	// If we bundle this folder, this is not needed. But if we don't bundle, we need this.
        	baseUrl: '../Scripts/app' /* script default location */
        }
    );

	function registerNonAmdLibs() {
		// Load the 3rd party libraries that the app needs.
		// These are in the bundle (BundleConfig.cs).
		// These are the core libraries that many others depend on.
		define('jquery', [], function () { return root.jQuery; });
		define('ko', [], function () { return root.ko; });
		define('sammy', [], function () { return root.Sammy; });
	}

	// Load the 3rd party libraries
	registerNonAmdLibs();


	// A list of all QUnit test Modules.  Make sure you include the `.js` 
	// extension so RequireJS resolves them as relative paths rather than using
	// the `baseUrl` value supplied above.
	var testModules = [
		"vm.search.tests.js"
	];


	// Resolve all testModules and then start the Test Runner.
	require(testModules, QUnit.start);
}());
/*reverse
first steps:
1) read argument file
2) create tmp dir
3) unzip apk 'classes.dex' file to tmp dir
4) run: dex2jar over 'classes.dex', rename classes-dex2jar.jar to classes.jar
5) run: apktool over apk file into tmp dir
6) grab info from AndroidManifest.xml using cheerio
	6.1) get manifest[package]
	6.2) get android version
7) determine real app package, using the 'activity' (action.main) tag
8) zip content of only those files which are inside step (7).

getMetrics
9) 

getSourceCode
Get the source code for the APK:

1) determine which framework was used (one for each plugin):
	titanium, cordova, unity, native
	each plugin, must have a 'test' method
2) titanium:
	2.1) if file tmpdir/apk_src/assets/Resources/_app_props_.json or app.js exists:
		2.1.1) this is an Appcelerator Titanium App compiled using Development Testing.
	2.2) if file 'package'.replace('.','/')/AssetCryptImpl.smali file exist
		2.2.2) this is a Production Appcelerator Titanium App.
		2.2.3) extracts code from class AssetCryptImpl, reading it as samli.
			2.2.3.1) search pattern 'hashmap.put("{file}, new Range({offset},{length})',
			2.2.3.2) decode integers offset and length (bytes)
			2.2.3.3) extract and decrypt dataInRange using 'bytes' length as secret key and AES for decipher
			2.2.3.4) put the result into a struct with the 'filenames' as struct keys.

3) each 'plugin' must have the methods:
	- init(config): testing if it is valid for the given apk/src/etc.
	- getMetrics()
		ret: {
			code 			: 	getCodeMetrics(),
			info 			: 	getInfo(), 
			design 			: 	getDesignMetrics(), 
			strings 		: 	getStringsMetrics(),
			code_costs 		: 	getCodeCost(),
			design_costs 	: 	getDesignCost(),
			code_flow 		: 	getFlowChart()
		}
	- getFlowChart() 
		- returns a 'dot' (viz.js) flow chart for source code.
*/
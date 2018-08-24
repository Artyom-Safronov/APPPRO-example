function dragHandler(event) {
	var csInterface = new CSInterface();
	var extPath = csInterface.getSystemPath(SystemPath.EXTENSION);
	var OSVersion = csInterface.getOSInformation();

	if (extPath !== null) {
		extPath = extPath + '/payloads/test.jpg';
		if (OSVersion.indexOf("Windows") >= 0) {
			var sep = '\\\\';
			extPath = extPath.replace(/\//g, sep);
		}
		event.dataTransfer.setData("com.adobe.cep.dnd.file.0", extPath);
		event.dataTransfer.setData("com.adobe.cep.dnd.file.1", extPath);
		//	event.dataTransfer.setData("com.adobe.cep.dnd.file.N", path);  N = (items to import - 1)
	}
}

/**
* Load JSX file into the scripting context of the product. All the jsx files in 
* folder [ExtensionRoot]/jsx & [ExtensionRoot]/jsx/[AppName] will be loaded.
*/
function loadJSX() {
	var csInterface = new CSInterface();

	// get the appName of the currently used app. For Premiere Pro it's "PPRO"
	var appName = csInterface.hostEnvironment.appName;
	var extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);

	// load general JSX script independent of appName
	var extensionRootGeneral = extensionPath + '/jsx/';
	csInterface.evalScript('$._ext.evalFiles("' + extensionRootGeneral + '")');

	// load JSX scripts based on appName
	var extensionRootApp = extensionPath + '/jsx/' + appName + '/';
	csInterface.evalScript('$._ext.evalFiles("' + extensionRootApp + '")');
}

function evalScript(script, callback) {
	new CSInterface().evalScript(script, callback);
}

function onClickButton(ppid) {
	var extScript = "$._ext_" + ppid + ".run()";
	evalScript(extScript);
}

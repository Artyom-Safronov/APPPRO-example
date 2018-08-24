$._PPP_ = {
	importFiles: function () {
		if (app.project) {
			var fileOrFilesToImport = File.openDialog("Choose files to import", 	// title
				0, 							// filter available files? 
				true); 						// allow multiple?
			if (fileOrFilesToImport) {
				// We have an array of File objects; importFiles() takes an array of paths.
				var importThese = [];
				if (importThese) {
					for (var i = 0; i < fileOrFilesToImport.length; i++) {
						importThese[i] = fileOrFilesToImport[i].fsName;
					}
					app.project.importFiles(importThese,
						1,				// suppress warnings 
						app.project.getInsertionBin(),
						0);				// import as numbered stills
				}
			} else {
				$._PPP_.updateEventPanel("No files to import.");
			}
		}
	},
};

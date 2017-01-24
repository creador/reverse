/*
method outlines
general utils for reverse:
- init(config)
	- initilizes the module with APK data
- createJustPackageJAR()
	- Create a new jar, containing only the main package files.
- exists(class)
	- Tests if the given class exists in the current APK
- existsDir(dir)
	- Tests if the package has a dir with the given name
- getSmaliSource(class)
	- Returns the smali content for the given class
- getJavaSource(class)
	- Returns the decompiled java source for the given class file (using jad)
- getFullSource()
	- Decompiles the whole classes.jar file into .java files
- getMethodContent (class, methodname, minlines, fromline)
	- Returns the content for the given method/function name of the given class.
- getAndroidVersion (level)
	- Returns the version of android for the given level.
- getURLs(content)
	- Returns the urls within the given content.
- findVerySimilar (list, test)
	- Returns the item from the list that has the closest similarity from the given test string (levdist<2)
- peopleInfo(name)
	- Returns the meta data of the given person name, using api.pipl.com.

*/
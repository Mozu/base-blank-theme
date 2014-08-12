mozu-base-blank-theme
=============

A theme that extends Core4. A good starting point for Mozu theme development.

build tooling requirements
--------------------------

This theme comes with a great set of build tools. To use them, here's what you need.

* NodeJS > 0.10.0 
* Git or another command-line-based version control system if you want to control versioning with packages

getting started
---------------

If you want to use the build tools (and you very do), run the following:
```bash
  node configure.js
```

This should install two global command line utilities, Grunt (for running build tasks) and Bower (for managing frontend packages). It should then install local development dependencies for your theme in the `node_modules` folder (don't check in this folder!) and the Core4 and Core5 themes in the `references` folder.

### Build theme
```bash
grunt
```

### build and update all resources to a new version number
```bash
grunt release --to <version>
```

### for source control versioning integration edit the following line in the gruntfile.js
```versionCmd = ':'; // ':' returns nothing. replace with e.g. 'git describe --tags --always' or 'svn info'
```
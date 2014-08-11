mozu-base-blank-theme
=============

A theme that extends Core4. A good starting point for Mozu theme development.

build tooling requirements
--------------------------

This theme comes with a great set of build tools. To use them, here's what you need.

* NodeJS > 0.10.0 (for JS compression and the whole build process)
* Grunt-CLI

getting started
---------------

If you want to use the build tools (and you very do), run the following:
```bash
  $ npm install -g grunt-cli
```
The global GruntJS command line client should install from Node Package Manager. Then, install the local dependencies specified in `package.json`:
```bash
  $ npm install
```

Local dependencies should all install. You can now use Grunt to lint, compile, and zip your theme!

### simple build without JS compression (for quick tests)
```bash
$ grunt
```

### build with JS compression and commit tag
```bash
$ grunt build
```

### build and update all resources to a new version number
```bash
$ grunt release --to <version>
```

### for source control versioning integration edit the following line in the gruntfile.js
```versionCmd = ':'; // ':' returns nothing. replace with e.g. 'git describe --tags --always' or 'svn info'
```
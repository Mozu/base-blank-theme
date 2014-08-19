# The Mozu Base Blank Theme

The Mozu Base Blank Theme extends the Mozu Core5 Theme. This theme is a good starting point for Mozu theme development. For information on the Mozu Core5 Theme, refer to the [Mozu Core5 Theme repository](https://github.com/Mozu/core-theme).

## Build Tooling Requirements

This theme includes a set of build tools. These tools work on Windows 7 and later, Mac OSX 10.4 and later, and most modern Linux distros. To use them, here's what you need.

* [NodeJS](http://nodejs.org) > 0.10.0 
* [Git](http://git-scm.com/) or another command-line-based version control system if you want to control versioning with packages

If you want to use the build tools, run the following from a command line in your new theme directory:
```bash
  node configure.js
```

This command installs two global command line utilities, Grunt (for running build tasks) and Bower (for managing frontend packages). This command also installs local development dependencies for your theme in the `node_modules` folder, and the Core4 and Core5 themes in the `references` folder.

## Getting Started

1.  Create your new theme in the [Mozu Developer Center](https://developer.mozu.com/Console/theme). **The theme creation workflow in Dev Center no longer gives you a base blank theme to download. Instead, download a new copy of this theme (use the most current release in the [Releases](https://github.com/mozu/base-blank-theme/releases) tab).**

2.  Install the build tools by running the `node configure.js` command described in the [Build Tooling Requirements](#build-tooling-requirements) section.

3. Design your theme. If you're starting from scratch, begin by editing `theme.json` and setting the name of your new theme.

## Theme Development Best Practices

*   Use the `references/core5` directory as a reference. The theme you're building inherits from the Core5 base theme by default. For each file you discover you need to override, copy the Core5 version from your `references/core5` folder and into the corresponding location in your own theme. 

*   Use the `references/core4` directory as a reference. If you're experienced building themes on Core4, you can use the side-by-side Core4 and Core5 directories to compare and contrast for relevant Core5 changes.

*   You should regularly synchronize your theme with the Mozu Dev Center. The build tools help you by automatically checking your scripts for common errors, then building a named and tagged zipfile for you to upload. If you have installed the build tools, the basic command you can run to do this is `grunt`.

## Command reference

All commands should be run from a command line (Terminal in OSX, Command Prompt in Windows) in the root directory of your theme.

### Install build tools
```bash
node configure.js
```

### Build theme into a zipfile, checking for errors and updates along the way
```bash
grunt
```
The name of the zipfile is taken from your `package.json` file. This file manages the build tools' dependencies on npm modules and establishes its identity as a "package". Therefore we use the name from this configuration as the filename for a generated zip. Unless you publish your theme to a package registry (which is not common), this name won't be used for any other purpose.

### Build and create a release with a synchronized version number across package.json, theme.json, etc
```bash
grunt release --to 1.2.3
```
Replace `1.2.3` with the desired version number.

### Update your references directory with released patches or updates to the Core4 or Core5 themes
```bash
grunt updatereferences
```

### Add source control integration to your build process
```bash
grunt setup-vcs-tagging
```
This command configures your build system so that your zipfile names are appended with an abbreviation of the current Git commit hash. If you're not using Git source control, but your source control system has a command which would output a unique commit/changeset/version ID, then you can supply it to this command with the option `--tagcmd`.

```
grunt setup-vcs-tagging --tagcmd="hg id -i"
```
This command configures the build system so that zipfile names are appended with a Mercurial ID from a Mercurial repository instead of a Git repository.

**Note: This command can only be run safely once, since it modifies code in the Gruntfile. To make this change manually, look for the variable `versionCmd` inside your `Gruntfile.js` file.**
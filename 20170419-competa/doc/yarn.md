Package management using Yarn
=============================
Instead of plain old npm you can use Yarn as a package manager, it is 100% compatible
with both npm and Bower and can install packages from both registries.

Why Yarn?
---------
tl;dr It's way faster and more reliable than npm and allows for offline development.

Yarn has additional features to further simplify the dependency management workflow.
* Compatibility with both [npm](https://www.npmjs.com/) and 
[bower](https://bower.io/) and it supports mixing registries.
* Ability to restrict licenses of installed modules and a means for outputting license information.
* Exposes a stable public JS API with logging abstracted for consumption via build tools.
* Readable, minimal, pretty CLI output.

Read more about why Yarn has been developed in [this blog post](https://code.facebook.com/posts/1840075619545360).

Installing Yarn
---------------
You can install [Yarn](https://yarnpkg.com/) on macOS using Brew:
```
$ brew update
$ brew install yarn
```

It can also be installed *globally* using npm:
```
$ npm install -g yarn
```

Test that Yarn is installed properly by running:
```
$ yarn --version
```

[Installing on other operating systems and more info here.](https://yarnpkg.com/en/docs/install)

Using Yarn
----------
Use these command with Yarn:

Installing all dependencies from package.json (`npm install`)
```
$ yarn
$ yarn install
```

Adding a package (`npm install --save [package]`)
```
$ yarn add [package]
$ yarn add [package]@[version]
$ yarn add [package]@[tag]

// similar to npm install --save-dev [package]
$ yarn add --dev [package]
```

Initialising / starting a new project (`npm init`)
```
$ yarn init

// without user interaction (answer yes to all questions)
$ yarn init -y
```

Upgrading a package (`npm update`)
```
$ yarn upgrade [package]
```

See the [Yarn documentation pages](https://yarnpkg.com/en/docs/cli/) for a full 
list of CLI options.


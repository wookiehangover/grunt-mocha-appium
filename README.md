grunt-mocha-appium
==================

> Run functional tests with [Mocha](https://github.com/visionmedia/mocha),
> [wd](https://github.com/admc/wd) and [Appium](http://appium.io/).

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-mocha-appium --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mocha-appium');
```

## The "mochaAppium" task

The "mochaAppium" task will use the [Appium](http://appium.io/) test automation
framework to provide a selenium bridge to native and hybrid applications. Tests
are written using mocha

**Appium needs to be installed separately.** See their [getting started
guide](http://appium.io/getting-started.html) for information on installing and
configuring Appium on you system. You don't need to start an Appium server before
running this task, you just need to have it installed.

### Overview

In your project's Gruntfile, add a section named `mochaAppium` to
the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mochaAppium: {
    options: {
      // Mocha options
      reporter: 'spec',
      timeout: 30e3,
      // Toggles wd's promises API, default:false
      usePromises: false
      // Path to appium executable, default:'appium'
      appiumPath: 'appium'
    },
    iphone: {
      src: ['test/*.js'],
      options: {
        // Appium Options
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        version: '6.1',
        // A url of a zip file containg your .app package
        // or
        // A local absolute path to your simulator-compiled .app directory
        app: 'http://appium.s3.amazonaws.com/TestApp6.0.app.zip'
      }
    }
  }
});
```

### Options for Mocha and WD

All options are passed to Mocha and WD. See their documentation for everything
you might want to configure.

The following options can be supplied to the task:

#### options.usePromises

Type: `Boolean` Default value: `false`

If enabled, this will use the [promise-enabled wd browser
API](https://github.com/admc/wd#promises-api) instead of the normal synchronous
API.

#### options.appiumPath

Type: `String` Default value: `appium`

If provided, this will be used as the location of the appium binary on your
system. If you've installed appium with npm and appium is in your path you
probably won't need to configure this.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [Grunt](http://gruntjs.com/).

### License

MIT

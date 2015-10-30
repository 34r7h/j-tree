# jtree

The 'www' folder contains production-ready code (see below), while the 'app' folder has the development code. This repo is ready to deploy to Heroku via a Node.js server. Heroku is only used for easy SendGrid email. 

The software stack of this project also includes AngularJS javascript framework for the front-end and Firebase for cloud database.

From heroku, the app can be deployed almost anywhere with this iframe code:
 
 
`<iframe src="https://irthos.github.io/j-tree/"></iframe>`




## Build & development

A developer should must have node.js installed to use the following Gulp commands.
Run `gulp` for development, `gulp build` for building.

## The gulp tasks
As per default the following tasks are available at your convenience:

* `gulp`: The development task. Runs all the injectors on file-change, file-creation or file-deletion. Unit-tests are run in parallel, as well as the sass-compilation. 
* `gulp injectAll`: Runs all the injectors once.
* `gulp build`: Minifies your JavaScript via ng-annotate, your css, your images and your html files and copies everything to the www-folder.  
* `gulp test`: Runs your unit tests with the keep-alive option. 
* `gulp testSingle`: Runs your unit tests once. 
* `gulp e2e`: Runs your end to end tests once. 
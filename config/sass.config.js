// https://www.npmjs.com/package/node-sass

module.exports = {

   /**
    * includePaths: Used by node-sass for additional
    * paths to search for sass imports by just name.
    */
   includePaths: [
      'node_modules/ionic-angular/themes',
      'node_modules/ionicons/dist/scss',
      'node_modules/ionic-angular/fonts',
      'node_modules/ionic2-custom-icons/directive/scss/',
      '.tmp-custom-icons/scss/'
   ],

   /**
    * variableSassFiles: Lists out the files which include
    * only sass variables. These variables are the first sass files
    * to be imported so their values override default variables.
    */
   variableSassFiles: [
      '{{SRC}}/theme/variables.scss',
      '.tmp-custom-icons/scss/variables.scss'
   ]

};

Package.describe({
  name: "oscarcalvo:x-editable-bootstrap",
  summary: "Has cambiado una parte del \bootstrap3-editable\js\bootstrap-editable.js para añadir una parte que compatible con el select2 4.0",
  version: "1.5.2_5",
  git: "https://github.com/oscarcalvo/meteor-x-editable-bootstrap.git"
});

Package.on_use(function (api){
  api.versionsFrom("1.2.0.1");
  // Package needs jQuery
  api.use('jquery');

  // This depends on BS3 JS libraries, including popovers.
  // Need to make sure bootstrap 3 is loaded first, or errors will ensue
  // https://github.com/vitalets/x-editable/issues/395
  api.use("twbs:bootstrap@3.3.5", "client", { weak: true });
  api.use("nemo64:bootstrap@3.3.5_2", "client", { weak: true });
  
  // Add FontAwesome for button icons
  api.use("fortawesome:fontawesome@4.4.0", "client", { weak: true });

  //x-editableme
  api.addFiles('lib/bootstrap3-editable/css/bootstrap-editable.css', 'client');
  api.addFiles('lib/bootstrap3-editable/js/bootstrap-editable.js', 'client', {bare:true});

  api.addAssets('lib/bootstrap3-editable/img/clear.png', 'client');
  api.addAssets('lib/bootstrap3-editable/img/loading.gif', 'client');

  //address
  api.addFiles('lib/address/address.css', 'client');
  api.addFiles('lib/address/address.js', 'client', {bare:true});

  //wysihtml5
  api.addFiles('lib/wysihtml5/wysihtml5.js', 'client', {bare:true});
  api.addFiles('lib/wysihtml5/bootstrap-wysihtml5-0.0.2/wysiwyg-color.css', 'client');
  api.addFiles('lib/wysihtml5/bootstrap-wysihtml5-0.0.2/wysihtml5-0.3.0.js', 'client', {bare:true});
  api.addFiles('lib/wysihtml5/bootstrap-wysihtml5-0.0.2/bootstrap-wysihtml5-0.0.2.css', 'client');
  api.addFiles('lib/wysihtml5/bootstrap-wysihtml5-0.0.2/bootstrap-wysihtml5-0.0.2.js', 'client', {bare:true});

  //typeahead
  api.addFiles('lib/inputs-ext/typeaheadjs/lib/typeahead.js', 'client');
  api.addFiles('lib/inputs-ext/typeaheadjs/lib/typeahead.js-bootstrap.css', 'client');

  //override image paths
  api.addFiles('path-override.css', 'client');
});

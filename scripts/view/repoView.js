(function(module) {
  var repoView = {};

  var ui = function () {
    var $repos = $('#repos');

    $repos.find('p').empty();
    $repos.show().siblings().hide();
  };

  var render;

  var render = function(repo) {
    var Template = Handlebars.compile($('.repo-template').text());
    return Template(repo);
  };

  repoView.index = function() {
    ui();
    $('#repos').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);

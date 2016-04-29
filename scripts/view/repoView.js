(function(module) {
  var repoView = {};

  var p = function () {
    var $repos = $('#repos');

    $repos.find('p').empty();
    $repos.show().siblings().hide();
  };

  var render = Handlebars.compile($('.repo-template').text());

  repoView.index = function() {
    p();
    $('#github-repositories').append(
      repos.with('name').map(render));
  };

  module.repoView = repoView;
})(window);

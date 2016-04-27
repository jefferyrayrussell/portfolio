(function(module) {
  var repoView = {};

  var ui = function () {
    var $about = $('#about');

    $about.find('.github-repositories').empty();
    $about.show().siblings().hide();
  };


  var render = function(repo) {
    var Template = Handlebars.compile($('.repo-template').text());
    return Template(repo);
  };

  repoView.index = function() {
    ui();
    $('.github-repositories').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);

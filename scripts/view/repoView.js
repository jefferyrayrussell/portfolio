(function(module) {
  var repoView = {};

  var ui = function () {
    var $about = $('#about');

    $about.find('.github-repos').empty();
    $about.show().siblings().hide();
  };


  var render = function(repo) {
    var repoTemplate = Handlebars.compile($('.repo-template').text());
    return repoTemplate(repo);
  };

  repoView.index = function() {
    ui();
    $('.github-repos').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);

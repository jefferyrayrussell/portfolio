
(function (module) {
  var reposController = {};

  reposController.index = function() {
    repos.requestRepos(repoView.index);
    $('#welcome').hide();
    $('#resume').hide();
    $('#projects').hide();
    $('#repos').show();
  };
  module.reposController = reposController;
})(window);

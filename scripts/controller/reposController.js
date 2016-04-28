
(function (module) {
  var reposController = {};

  reposController.index = function() {
    $('#welcome').hide();
    $('#resume').hide();
    $('#projects').hide();
    $('#repos').show();
    // repos.requestRepos(repoView.index);
  };
  module.reposController = reposController;
})(window);

(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url:     'https://api.github.com/users/jefferyrayrussell/repos' +
               '?per_page=4' +
               '&sort=updated',
      type:    'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        console.log(data);
        repos.all = data;
        callback(data);
      }
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);

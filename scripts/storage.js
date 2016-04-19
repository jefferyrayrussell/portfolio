// The function below retrieves data from either a local or remote source and processes the data before handing off control to the view.
ProjectItem.all = [];

ProjectItem.fetchAll = function () {
  if (localStorage.projectData) {
    ProjectItem.loadAll(
      JSON.parse(localStorage.projectData)
    );
    infoRendered.initIndexPage();
  } else {
    $getJSON('data/projectData.json', function(data) {
      ProjectItem.loadAll(data);
      localStorage.projectData = JSON.stringify(data);
      infoRendered.initIndexPage();
    });
  }
};

ProjectItem.fetchAll = function() {
  $.ajax({
    type: 'GET',
    url: 'data/projectData.json',
    success: function(data, message, xhr) {
      console.log('success function worked', xhr);
      var eTag = xhr.getResponseHeader('eTag');
      if (eTag === localStorage.eTag) {
        ProjectItem.loadAll(JSON.parse(localStorage.projectData));
        infoRendered.initIndexPage();
      } else {
        $getJSON('data/projectData.json', function(data) {
          ProjectItem.loadAll(data);
          localStorage.projectData = JSON.stringify(data);
          localStorage.eTag = eTag;
          infoRendered.initIndexPage();
        });
      }
    }
  });
};

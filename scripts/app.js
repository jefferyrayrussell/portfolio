// Old Constructor
    /*
    var projectDataItems = [];

    function ProjectItem (object){
      this.name = object.name;
      this.id = object.id;
      this.class = object.class;
      this.creators = object.creators;
      this.date = object.date;
      this.repoUrl = object.repoUrl;
      this.location = object.location;
      this.summary = object.summary;
    };
    */

// New Constructor
function ProjectItem (objects) {
  for (key in objects) {
    this[key] = objects[key];
  };
};

ProjectItem.all = [];

// Old Prototypes
    /*
    ProjectItem.prototype.toHtml = function() {
      var $source = $('#project-template').html();
      var template = Handlebars.compile($source);
      return template(this);
    };
    ProjectItem.prototype.filterNameToHtml = function() {
      var template = Handlebars.compile($('#name-filter-template').html());
      return template(this);
    };
    */

// New Prototypes

ProjectItem.prototype.toHtml = function() {
  var $newProjectItem = Handlebars.compile($(template).html());


  return template(this);
};

ProjectItem.loadAll = function(data) {
  Project.all.push(new ProjectItem(ele));
};


ProjectItem.prototype.filterNameToHtml = function() {
  var template = Handlebars.compile($('#name-filter-template').html());
  return template(this);
};
var $source = $('#project-template').html();
// The code below takes the projectData from each of the my projects found on the projects.js file and pushes it through the projectItem constructor above and then stores it in an array called projectDataItems which was introduced above.
projectData.forEach(function(ele) {
  projectDataItems.push(new ProjectItem(ele));
});

// The code below does the actual appending to the web page. It is appended at the class location identified as portfolio-projects.
projectDataItems.forEach(function(a){
  $('#portfolio-projects').append(a.toHtml());
  $('#name-filter').append(a.filterNameToHtml());
});

// The function below retrieves data from either a local or remote source and processes the data before handing off control to the view.
ProjectItem.fetchAll = function () {
  if (localStorage.projectData) {
    ProjectItem.loadAll(
      JSON.parse(localStorage.projectData)
    );
    infoRendered.initIndexPage();
  } else {
    $.getJSON('data/projectData.json', function(data) {
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

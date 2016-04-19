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

// New Prototype
ProjectItem.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project-container').html());
  return template(this);
};

// The OLD FUNCTION below takes the projectData from each of the my projects found on the projects.js file and pushes it through the projectItem constructor above and then stores it in an array called projectDataItems which was introduced above. This OLD CODE is replaced by the function NEW FUNCTION below.
    /*
    projectData.forEach(function(ele) {
      projectDataItems.push(new ProjectItem(ele));
    });
    */

//NEW FUNCTION  This function takes our data and use it to instantiate all of the projects to be displayed.
ProjectItem.loadAll = function(data) {
  data.forEach(function(ele) {
    ProjectItem.all.push(new ProjectItem(ele));
}

// The OLD CODE below is moved to the render page; it is used to filter the projects by name.  It has been moved to the render.js page.
    /*
    ProjectItem.prototype.filterNameToHtml = function() {
      var template = Handlebars.compile($('#name-filter-template').html());
      return template(this);
    };
    var $source = $('#project-template').html();
    */


// The code below does the actual appending to the web page. It is appended at the class location identified as portfolio-projects.
ProjectItem.forEach(function(a){
  $('#portfolio-projects').append(a.toHtml());
  $('#name-filter').append(a.filterNameToHtml());
});

// NEW CODE: The functions below retrieves data from either a local or remote source and processes the data before handing off control to the view.

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

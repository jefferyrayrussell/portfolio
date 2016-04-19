//The code below is an object constructor which creates an object containing the essential properties for each of my projects.  The variable projectDataItems is an array that will store the various instances of the object.
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

// Alternative to the above?
/*
function ProjectItem (projectDataItems) {
  for (key in projectDatatItems) {
    this[key] = projectDataItems[key];
  };
};
*/

// The code below is a method using jQuery and Handlebars to organizes my coding projects so that they can later be appended to my web page.  The project-template is found on the index.html page.
ProjectItem.prototype.toHtml = function() {
  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

ProjectItem.prototype.filterNameToHtml = function() {
  var template = Handlebars.compile($('#name-filter-template').html());
  return template(this);
};

// Alternative to the above?
/*
ProjectItem.prototype.toHtml = function(template) {
  var template = Handlebars.compile($('template').html());
  return template(this);
};
*/

// The code below takes the projectData from each of the my projects found on the projects.js file and pushes it through the projectItem constructor above and then stores it in an array called projectDataItems which was introduced above.
projectData.forEach(function(ele) {
  projectDataItems.push(new ProjectItem(ele));
});

// The code below does the actual appending to the web page. It is appended at the class location identified as portfolio-projects.
projectDataItems.forEach(function(a){
  $('#portfolio-projects').append(a.toHtml());
  $('#name-filter').append(a.filterNameToHtml());
});

// Alternative to the above?
/*
projectDataItems.forEach(function(a) {
  $('#portfolio-projects').append(a.toHtml('#project-template'));
  if (categories.indexOf(a.category)){
    $('.filters ul').append(a.toHTML('#category-filter-template'));
    categories.push(a.category);
  };
});
*/
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

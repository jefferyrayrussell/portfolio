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

// The code below is a methody using jQuery and Handlebars to organizes my coding projects so that they can later be appended to my web page.  The project-template is found on the index.html page.
ProjectItem.prototype.toHtml = function() {
  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

ProjectItem.prototype.filterNameToHtml = function() {
  var template = Handlebars.compile($('#name-filter-template').html());
  return template(this);
};

// The code below takes the projectData from each of the my projects found on the projects.js file and pushes it through the projectItem constructor above and then stores it in an array called projectDataItems which was introduced above.
projectData.forEach(function(ele) {
  projectDataItems.push(new ProjectItem(ele));
});

// The code below does the actual appending to the web page. It is appended at the class location identified as portfolio-projects.
projectDataItems.forEach(function(a){
  $('#portfolio-projects').append(a.toHtml());
  $('#name-filter').append(a.filterNameToHtml());
});

// The code below provides functionality to the buttons on the navigation bar with the class "page-content".  The other buttons on the navigation which employ icons are merely links to personal social media pages as well as my Github repository.  When a page content button is clicked, either welcome, resume, or projects, the other information disappears from the page.

var infoRendered = {};

infoRendered.handleNavigationBar = function(){
  $('.navigation-bar').on('click', '.page-tab', function(){
    $('.page-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('.navigation-bar .page:first').click();
};

// The code below provides functionality to a filter by title bar placed below the projects heading.  When the name of a project is selected the other projects disappear from the page and leave that project.

infoRendered.handleNameFilter = function() {
  $('#name-filter').on('change', function(e) {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-name="' + $(this).val() + '"]').show();
    } else {
      $('article').show();
    }
  });
};

// The code below calls the above jQuery methods after the page has been completely loaded.
$(document).ready(function(){
  infoRendered.handleNavigationBar();
  infoRendered.handleNameFilter();
});

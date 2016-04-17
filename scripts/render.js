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

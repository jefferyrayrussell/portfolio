
(function (module) {
  var homeController = {};

  homeController.index = function() {
    $('#projects').hide();
    $('#about').hide();
    $('#home').show();
  };
  module.homeController = homeController;
})(window);


(function (module) {
  var welcomeController = {};

  welcomeController.index = function() {
    $('#resume').hide();
    $('#projects').hide();
    $('#repos').hide();
    $('#welcome').show();
  };
  module.welcomeController = welcomeController;
})(window);

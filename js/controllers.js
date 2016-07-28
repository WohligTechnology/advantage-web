angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.programs = [{
      by: 'W3Cx',
      subject: 'Html5',
      images: 'img/courses/1.jpeg',
      name: 'HTML Introduction',
      status: "Current Self-Paced"
    }, {
      by: 'W3Cx',
      subject: 'Html5',
      images: 'img/courses/1.jpeg',
      name: 'HTML Introduction',
      status: "Current Self-Paced"
    }, {
      by: 'W3Cx',
      subject: 'Html5',
      images: 'img/courses/1.jpeg',
      name: 'HTML Introduction',
      status: "Current Self-Paced"
    }, {
      by: 'W3Cx',
      subject: 'Html5',
      images: 'img/courses/1.jpeg',
      name: 'HTML Introduction',
      status: "Current Self-Paced"
    }, {
      by: 'W3Cx',
      subject: 'Html5',
      images: 'img/courses/1.jpeg',
      name: 'HTML Introduction',
      status: "Current Self-Paced"
    }];
  })
  .controller('CartCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file

    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.cart = [{
      img: "img/product1.png",
      name: "The Nawishtah Jacket and Gown",
      desginername: "anita dongre",
      rental: "6700",
      size: "M",
      price: "9,999",
      date: "04 May 2016",
      duration: "07"
    }, {
      img: "img/product2.png",
      name: "The Nawishtah Jacket and Gown",
      desginername: "anita dongre",
      rental: "6700",
      size: "M",
      price: "9,999",
      date: "04 May 2016",
      duration: "07"
    }];

    $scope.date = function() {
      $uibModal.open({
        animation: true,
        templateUrl: "views/modal/changedate.html",
        controller: "CartCtrl"
      })
    };
    $scope.remove = function() {
      $uibModal.open({
        animation: true,
        templateUrl: "views/modal/removeitem.html",
        controller: "CartCtrl"
      })
    };

  })
  .controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("checkout");
    $scope.menutitle = NavigationService.makeactive("Checkout");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("login");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('SignupCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("signup");
    $scope.menutitle = NavigationService.makeactive("Signup");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('ForgotCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("forgot");
    $scope.menutitle = NavigationService.makeactive("Forgot");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('ForgotPasswordCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("forgot-password");
    $scope.menutitle = NavigationService.makeactive("Forgot");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('CheckoutDetailCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("checkout-details");
    $scope.menutitle = NavigationService.makeactive("Checkout");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.getslide = "menu-out";
    $scope.getnav = function() {
      if ($scope.getslide == "menu-in") {
        $scope.getslide = "menu-out";
        $scope.onebar = "";
        $scope.secondbar = "";
        $scope.thirdbar = "";
        $scope.buttonpos = "";
      } else {
        $scope.getslide = "menu-in";
        $scope.onebar = "firstbar";
        $scope.secondbar = "secondbar";
        $scope.thirdbar = "thirdbar";
        $scope.buttonpos = "buttonpos";
      }
    };
  })
  .controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {
    $scope.changeLanguage = function() {
      console.log("Language CLicked");

      if (!$.jStorage.get("language")) {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        if ($.jStorage.get("language") == "en") {
          $translate.use("hi");
          $.jStorage.set("language", "hi");
        } else {
          $translate.use("en");
          $.jStorage.set("language", "en");
        }
      }
      //  $rootScope.$apply();
    };


  })

;

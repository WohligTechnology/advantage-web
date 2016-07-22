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
    },{
        by: 'W3Cx',
        subject: 'Html5',
        images: 'img/courses/1.jpeg',
        name: 'HTML Introduction',
        status: "Current Self-Paced"
    },{
        by: 'W3Cx',
        subject: 'Html5',
        images: 'img/courses/1.jpeg',
        name: 'HTML Introduction',
        status: "Current Self-Paced"
    },{
        by: 'W3Cx',
        subject: 'Html5',
        images: 'img/courses/1.jpeg',
        name: 'HTML Introduction',
        status: "Current Self-Paced"
    },{
        by: 'W3Cx',
        subject: 'Html5',
        images: 'img/courses/1.jpeg',
        name: 'HTML Introduction',
        status: "Current Self-Paced"
    }];
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
    }

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

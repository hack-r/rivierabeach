var app = angular.module('RiveriaBeachApp', ['ngMaterial', 'ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 	$scope.menu = [
    {
      link : '',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link : '',
      title: 'Friends',
      icon: 'group'
    },
    {
      link : '',
      title: 'Messages',
      icon: 'message'
    }
  ];
  $scope.admin = [
    {
      link : '',
      title: 'Trash',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }
  ];
  $scope.activity = [
      {
        what: 'Community Meeting',
        who: 'All Riveria Beach Residents',
        when: '1:28PM 10/7/2016',
        notes: "Meeting at the Firehouse from 6 - 7pm"
      },
      {
        what: 'Softball game',
        who: 'Youth 10 - 12',
        when: '3:00PM 10/8/2016',
        notes: "Register with John Doe 555-5555"
      },
      {
        what: 'Carnival',
        who: 'Open to the Public',
        when: '8PM - Midnight Saturday and Sunday',
        notes: "Admission is $10 cash"
      },
      {
        what: 'Yard sale',
        who: 'Open to the Public',
        when: '9AM - 11AM Saturday',
        notes: "123 Church Rd"
      },
    ];
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

  $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

app.directive('userAvatar', function() {
  return {
    replace: true,
    template: "<svg    xmlns:osb='http://www.openswatchbook.org/uri/2009/osb'    xmlns:dc='http://purl.org/dc/elements/1.1/'    xmlns:cc='http://creativecommons.org/ns#'    xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'    xmlns:svg='http://www.w3.org/2000/svg'    xmlns='http://www.w3.org/2000/svg'    xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'    xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'    version='1.1'    id='svg2'    viewBox='0 0 65 65'    height='64'    width='64'    inkscape:version='0.91 r13725'    sodipodi:docname='rb6464.svg'>   <sodipodi:namedview      pagecolor='#ffffff'      bordercolor='#666666'      borderopacity='1'      objecttolerance='10'      gridtolerance='10'      guidetolerance='10'      inkscape:pageopacity='0'      inkscape:pageshadow='2'      inkscape:window-width='1536'      inkscape:window-height='801'      id='namedview3353'      showgrid='false'      units='px'      inkscape:zoom='0.60245417'      inkscape:cx='849.63338'      inkscape:cy='110.27704'      inkscape:window-x='-8'      inkscape:window-y='-8'      inkscape:window-maximized='1'      inkscape:current-layer='svg2'      fit-margin-top='0'      fit-margin-left='0'      fit-margin-right='0'      fit-margin-bottom='0'      showborder='false' />   <defs      id='defs4'>     <linearGradient        osb:paint='solid'        id='linearGradient4179'>       <stop          id='stop4181'          offset='0'          style='stop-color:#000000;stop-opacity:1;' />     </linearGradient>   </defs>   <metadata      id='metadata7'>     <rdf:RDF>       <cc:Work          rdf:about=''>         <dc:format>image/svg+xml</dc:format>         <dc:type            rdf:resource='http://purl.org/dc/dcmitype/StillImage' />         <dc:title></dc:title>       </cc:Work>     </rdf:RDF>   </metadata>   <g      id='g3355'      transform='matrix(0.21062529,0,0,0.21062529,158.97695,17.360477)'>     <desc        id='desc3369'>icon</desc>     <g        id='layer1'>       <circle          style='fill:#009cf0;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1'          id='path3336'          cx='-602.85712'          cy='69.505058'          r='151.42857' />       <rect          style='fill:#ffffff;fill-opacity:1'          id='rect4158'          width='193.80003'          height='144.85301'          x='-699.19604'          y='24.652056' />       <rect          style='fill:#ffffff;fill-opacity:1'          id='rect4162'          width='155.71428'          height='155.71428'          x='373.2374'          y='322.82352'          transform='matrix(-0.70710678,0.70710678,-0.70710678,-0.70710678,0,0)' />       <rect          style='fill:#ffffff;fill-opacity:1'          id='rect4173'          width='19.512196'          height='71.951218'          x='-682.92682'          y='-47.637794'          ry='9.7560978' />       <text          xml:space='preserve'          style='font-style:normal;font-weight:normal;font-size:40px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#009cf0;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1'          x='-635.36584'          y='20.654888'          id='text4195'          sodipodi:linespacing='125%'><tspan            id='tspan4197'            x='-635.36584'            y='20.654888'            style='font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:60px;line-height:126.99999809%;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';text-align:start;writing-mode:lr-tb;text-anchor:start;fill:#009cf0;fill-opacity:1'>R</tspan></text>       <text          xml:space='preserve'          style='font-style:normal;font-weight:normal;font-size:40px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#009cf0;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1'          x='-597.46344'          y='54.801228'          id='text4199'          sodipodi:linespacing='125%'><tspan            id='tspan4201'            x='-597.46344'            y='54.801228'            style='font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:60px;line-height:125%;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';text-align:start;writing-mode:lr-tb;text-anchor:start;fill:#009cf0;fill-opacity:1'>B</tspan></text>       <path          style='fill:#009cf0;fill-opacity:1;stroke:none;stroke-width:0.67507702;stroke-opacity:1'          d='m -505.412,36.002405 20.333,0 0,38.1298 -20.333,0 z'          id='rect4207'          inkscape:connector-curvature='0' />       <path          style='fill:#009cf0;fill-opacity:1;stroke:none;stroke-width:0.67507702;stroke-opacity:1'          d='m -719.52832,35.102183 20.337,0 0,38.1298 -20.337,0 z'          id='rect4207-6'          inkscape:connector-curvature='0' />       <rect          style='fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1'          id='rect4307'          width='47.575813'          height='54.895168'          x='-626.08392'          y='115.31452' />     </g>   </g> </svg>"
  };
});

app.config(function($mdThemingProvider) {
  var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});

/*Copyright 2016 Jason D. Miller. All Rights Reserved.*/

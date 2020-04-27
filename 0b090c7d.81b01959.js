/*! For license information please see 0b090c7d.81b01959.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(11),i=(n(0),n(174)),r=n(188),c=n(187),l={id:"installation-ios",title:"iOS Manual Installation",sidebar_label:"iOS Manual Installation"},s={id:"installation-ios",title:"iOS Manual Installation",description:"In case the installation step in our [Getting Started](getting-started.md) doc did not work, follow these steps.",source:"@site/docs/installation-ios.md",permalink:"/react-native-notifications/docs/installation-ios",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/installation-ios.md",sidebar_label:"iOS Manual Installation",sidebar:"docs",previous:{title:"Local Notifications",permalink:"/react-native-notifications/docs/localNotifications"},next:{title:"Android Installation",permalink:"/react-native-notifications/docs/installation-android"}},p=[{value:"Installation with CocoaPods",id:"installation-with-cocoapods",children:[]}],d={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In case the installation step in our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-notifications/docs/getting-started"}),"Getting Started")," doc did not work, follow these steps."),Object(i.b)("p",null,"Start by running this:"),Object(i.b)(r.a,{defaultValue:"npm",values:[{label:"Npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install --save react-native-notifications\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ yarn add react-native-notifications\n")))),Object(i.b)("h3",{id:"installation-with-cocoapods"},"Installation with CocoaPods"),Object(i.b)("p",null,"Projects generated using newer versions of react-native use CocoaPods by default. In that case it's easier to install react-native-navigation using CocoaPods."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add the following to ",Object(i.b)("inlineCode",{parentName:"li"},"Podfile"),":")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="./ios/Podfile"',title:'"./ios/Podfile"'}),"platform :ios, '9.0'\nrequire_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'\n\ntarget 'YourApp' do\n  # Pods for YourApp\n  pod 'React', :path => '../node_modules/react-native/'\n  pod 'React-Core', :path => '../node_modules/react-native/React'\n  pod 'React-DevSupport', :path => '../node_modules/react-native/React'\n  pod 'React-fishhook', :path => '../node_modules/react-native/Libraries/fishhook'\n  pod 'React-RCTActionSheet', :path => '../node_modules/react-native/Libraries/ActionSheetIOS'\n  pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'\n  pod 'React-RCTBlob', :path => '../node_modules/react-native/Libraries/Blob'\n  pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'\n  pod 'React-RCTLinking', :path => '../node_modules/react-native/Libraries/LinkingIOS'\n  pod 'React-RCTNetwork', :path => '../node_modules/react-native/Libraries/Network'\n  pod 'React-RCTSettings', :path => '../node_modules/react-native/Libraries/Settings'\n  pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'\n  pod 'React-RCTVibration', :path => '../node_modules/react-native/Libraries/Vibration'\n  pod 'React-RCTWebSocket', :path => '../node_modules/react-native/Libraries/WebSocket'\n\n  pod 'React-cxxreact', :path => '../node_modules/react-native/ReactCommon/cxxreact'\n  pod 'React-jsi', :path => '../node_modules/react-native/ReactCommon/jsi'\n  pod 'React-jsiexecutor', :path => '../node_modules/react-native/ReactCommon/jsiexecutor'\n  pod 'React-jsinspector', :path => '../node_modules/react-native/ReactCommon/jsinspector'\n  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'\n\n  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'\n  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'\n  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'\n\n+ pod 'ReactNativeNotifications', :podspec => '../node_modules/react-native-notifications/ReactNativeNotifications.podspec'\n\n  use_native_modules!\nend\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cd ios && pod install"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the following line at the top of your ",Object(i.b)("inlineCode",{parentName:"p"},"AppDelegate.m")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec",metastring:'title="./ios/{project_name}/AppDelegate.m"',title:'"./ios/{project_name}/AppDelegate.m"'}),'#import "RNNotifications.h"\n')),Object(i.b)("p",null,"Start monitor notifications in: ",Object(i.b)("inlineCode",{parentName:"p"},"application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec",metastring:'title="./ios/{project_name}/AppDelegate.m"',title:'"./ios/{project_name}/AppDelegate.m"'}),"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [RNNotifications startMonitorNotifications]; // -> Add this line\n\n    return YES;\n}\n")),Object(i.b)("p",null,"And add the following methods to support registration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec",metastring:'title="./ios/{project_name}/AppDelegate.m"',title:'"./ios/{project_name}/AppDelegate.m"'}),"- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n\n- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];\n}\n")))}u.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},176:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&e.push(r)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},180:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},187:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},188:function(e,t,n){"use strict";n(85),n(84),n(86),n(34),n(22),n(23);var a=n(0),o=n.n(a),i=n(180);var r=function(){return Object(a.useContext)(i.a)},c=n(176),l=n.n(c),s=n(143),p=n.n(s),d=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,s=e.groupId,b=r(),m=b.tabGroupChoices,f=b.setTabGroupChoices,v=Object(a.useState)(i),h=v[0],O=v[1];if(null!=s){var g=m[s];null!=g&&g!==h&&O(g)}var j=function(e){O(e),null!=s&&f(s,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:l()("tab-item",p.a.tabItem,{"tab-item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}}}]);
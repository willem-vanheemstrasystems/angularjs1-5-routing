# angularjs1-5-routing
AngularJS 1.5 Routing

Based on 'Routing' at https://www.youtube.com/watch?v=uF5jiRLRLX8&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=23
 
#Routing

Please note: The Angular JS Route module is present in a separate JavaScript file.
It does ***not*** come with the core Angular JavaScript file.

##Layout template

Based on 'Layout template' at https://www.youtube.com/watch?v=N3cI20xTyZE&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=24

Using ```ng-view``` to inject the partial templates into the index page.

##Partial templates

Based on 'Partial Templates' at https://www.youtube.com/watch?v=iARy_ClTnHU&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=25

##Route configuration & creating controllers

Inject ```ngRoute``` in our module.

Chain a config function to our module, inject the ```$routeProvider``` service.

Inside the config function, attach a ```when()``` method to our $routeProvider service object, for each route (based on URL e.g /home):

- templateUrl: <path to and template file>,
- controller: <name of controller>
- controllerAs: <defaults to ctrl>

Chain a controller function for each controller defined in the config:

- custom properties, such as pageTitle: <title of page for this controller, e.g. Home>

Based on 'Route configuration' at https://www.youtube.com/watch?v=hThmoKA9aeU&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=26

See scriptA.js, indexA.html and stylesA.css how to implement this.

##Remove # from URL

Based on 'Remove # from URL' at https://www.youtube.com/watch?v=XsRugDQaGOo&index=27&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

There are 4 simple steps to remove # from URLs in Angular

1. Enable html5mode routing inside our module's config function, after injecting $locationProvider

```javascript
$locationProvider.html5Mode(true);
```

2. Remove # symbols from all the links in index.html

```javascript
<a href="home">Home</a>
<a href="courses">Courses</a>
<a href="students">Students</a>
```

3. Include URL rewrite rule in web.config

```javascript
<rewrite>
  <rules>
    <rule name="RewriteRules" stopProcessing="true">
      <match url=".*" />
      <conditions logicalGrouping="MatchAll">
        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true"/>
        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true"/>
        <add input="{REQUEST_URI}" pattern="^/(api)" negate="true"/>
      </conditions>
      <action type="Rewrite" url="/index.html" />
    </rule>
  </rules>
</rewrite>
```

4. Set the base href element (inside index.html's head section) to the location of your single page application

```javascript
<base href="/" />
```

Note: the below files will ***only*** work if the web.config has been updated with step 3. above.

See scriptB.js, indexB.html and stylesB.css how to implement this.

##Set a default Route

Based on 'Default Route' at https://www.youtube.com/watch?v=hG8NM2FM8tg&index=28&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl




Note: below files use hash (#) bang routing still

See scriptC.js, indexC.html and stylesC.css how to implement this.
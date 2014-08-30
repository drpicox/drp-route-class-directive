Route Class Directive
=====================

An AngularJS directive like ngClass that adds and removes css classes based in the current route path.


Examples
--------

```html
<div drp-route-class="{'home-page' : '/?', 'a-product-page': '/products/[^/]+'">
    ...
</div>
```



How to install
--------------

Add the bower component `drp-route-class-directive`:

```bash
    $ bower install --save drp-route-class-directive
```

Add the dependency to your `index.html`:

```html
    <script src="bower_components/drp-route-class-directive/drp-route-class-directive.js"></script>
```

Add the dependency to you `YourApp.js`:

```javascript
    angular.module('YourApp', [

        // ...your other dependencies...

        'com.david-rodenas.DrpRouteClassDirective',

    ]);
```



How to use
----------

Invoke it in your html templates using the directive as attribute and as value an object whose keys are css class names and values string regular expressions:

```html
<element drp-route-class="{'class-name': 'routeStringRegex', ...}">  ... </element>
```





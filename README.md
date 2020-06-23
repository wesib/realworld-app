# ![RealWorld Example App](logo.png)
[![Build Status][build-status-img]][build-status-link]
> ### [Wesib] codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the
> [RealWorld] spec and API.

[Wesib]: https://github.com/wesib/wesib
[RealWorld]: https://github.com/gothinkster/realworld
[build-status-img]: https://github.com/wesib/realworld-app/workflows/Build/badge.svg
[build-status-link]: https://github.com/wesib/realworld-app/actions?query=workflow%3ABuild

### [Demo]&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld]

This codebase was created to demonstrate a fully fledged fullstack application built with **[Wesib]** including 
CRUD operations, authentication, routing, pagination, and more.

For more information on how to this works with other frontends/backends, head over to the [RealWorld] repo.

[Demo]: https://wesib.github.io/realworld-app


# How it works

1. __Custom elements__.
   
   The application relies on custom elements.
   
   Wesib creates a custom element for each component, provides an IoC context to it, controls its life cycle, and serves
   as a glue to make components work together.
   
2. __Navigation vs routing__.
   
   This application has no router. Navigation uses History API to update page URL, then fetches HTML document for the
   new page and replaces fragments of current page fragment with loaded ones. Unless just URL hash changes, in which
   case custom application logic updates the current page. E.g. with API requests.
   
   Every tab, pagination link, or article tag is a real link with URL. It can be either clicked, or opened in another
   browser window. The result page would be the same. Clicking on a link would initiate navigation with History API.
   
   Ideally, articles could be stored as HTML documents at server side. Then opening such article would be just a
   navigation to corresponding page. This requires server side support though.

3. __Markup vs templates__

   Wesib does not provide any templating engine. One still can be used (e.g. lit-html), but Wesib encourages another
   approach.
   
   With custom elements it is possible to make HTML document contain a pure markup. Without any logic (as templates
   do), or styling information (such as CSS classes). The latter is not always true for this application, as it uses
   Bootstrap CSS.

4. __Decorators vs attributes__
   
   Typically, custom element has attributes to customize its behavior. This allows this custom element to be reused.
   
   Wesib encourages reusable logic to be represented as TypeScript decorator. Such decorator may have parameters to
   customize its behavior. It can be either applied to component directly, or reused by other decorators. 
   
   So, instead of adding attributes to markup, Wesib allows declaring specialized components that differ by their
   decorators. This helps keep the logic within TypeScript code, which is more flexible than declaring it via
   attributes. The latter approach still used when appropriate. E.g. `<conduit-in-error/>` has a `code` attribute to
   distinguish it from other error indicators for the same input control, but with different error codes.
   
5. __Zero magic__

   Wesib does not provide any "magic", such as templating engine or compile time transformations.
   
   The application code is fully reactive. It is based on [@proc7ts] library set and [@proc7ts/fun-events] in particular
   (think RxJS specialized on event processing rather generic data streaming). 
   
6. __CSS__

  CSS is updated to Bootstrap 4.4 from its alpha version used in starter kit. This may lead to some visual differences.


[@proc7ts]: https://github.com/proc7ts/
[@proc7ts/fun-events]: https://github.com/proc7ts/fun-events/ 


# Getting started

1. `yarn install`
2. `yarn build`
3. `yarn start`
4. Open <http://localhost:4200/>

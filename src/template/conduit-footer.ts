import * as Handlebars from 'handlebars';

Handlebars.registerPartial(
    'conduit-footer',
    `
<conduit-footer>
  <div class="container">
    <a href="" class="logo-font">conduit</a>
    <span class="attribution">
      An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code & design licensed under MIT.
    </span>
  </div>
</conduit-footer>
    `.trim(),
);

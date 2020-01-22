import * as Handlebars from 'handlebars';

Handlebars.registerPartial(
    'conduit-nav',
    `
<conduit-nav class="navbar navbar-light">
  <div class="container">
    <a class="navbar-brand" href="">conduit</a>
    <ul class="nav navbar-nav pull-xs-right">
      <li class="nav-item">
        <a class="nav-link" href="editor/">
          <i class="ion-compose"></i>&nbsp;New Post
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="register/">Sign up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="settings/">Settings</a>
      </li>
    </ul>
  </div>
</conduit-nav>
    `.trim(),
);

import * as Handlebars from 'handlebars';

Handlebars.registerPartial(
    'conduit-navbar',
    `
<conduit-navbar class="navbar navbar-light bg-light navbar-expand">
  <div class="container">
    <a class="navbar-brand" href="">conduit</a>
    <ul class="nav navbar-nav pull-xs-right">
      <li class="nav-item">
        <a class="nav-link" href="editor/">
          <i class="ion-compose"></i>&nbsp;New Post
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login/">Sign in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="register/">Sign up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="settings/">Settings</a>
      </li>
    </ul>
  </div>
</conduit-navbar>
    `.trim(),
);

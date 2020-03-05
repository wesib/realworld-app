import * as Handlebars from 'handlebars';

Handlebars.registerPartial(
    'conduit-navbar',
    `
<conduit-navbar class="navbar navbar-light bg-light navbar-expand">
  <div class="container">
    <a class="navbar-brand" href="">conduit</a>
    <ul class="nav navbar-nav pull-xs-right">
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="ion-home"></i>
          Home
        </a>
      </li>
      <li class="nav-item if-authenticated@conduit">
        <a class="nav-link" href="editor/">
          <i class="ion-compose"></i>
          New Post
        </a>
      </li>
      <li class="nav-item unless-authenticated@conduit">
        <a class="nav-link" href="login/">
          <i class="ion-log-in"></i>
          Sign in
        </a>
      </li>
      <li class="nav-item unless-authenticated@conduit">
        <a class="nav-link" href="register/">Sign up</a>
      </li>
      <li class="nav-item if-authenticated@conduit">
        <a class="nav-link" href="settings/">
          <i class="ion-gear-a"></i>
          Settings
        </a>
      </li>
    </ul>
  </div>
</conduit-navbar>
    `.trim(),
);

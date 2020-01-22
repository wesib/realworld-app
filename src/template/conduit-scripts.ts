import * as Handlebars from 'handlebars';

Handlebars.registerPartial(
    'conduit-scripts',
    `<script src="{{module}}" type="module"></script>`,
);

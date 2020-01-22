import * as Handlebars from 'handlebars';

Handlebars.registerPartial(
    'conduit-head',
    `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
<title>{{title}}</title>
<meta name="wesib-app-rev" content="{{{rev}}}">
<base href="{{{base}}}"/>
<link rel="stylesheet" href="{{style}}">
<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic">
    `.trim(),
);

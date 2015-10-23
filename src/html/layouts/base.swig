<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>
    {% block title %}Home{% endblock %} - {% block subtitle %}Overview{% endblock %} - {{ app.name }}
  </title>
  <meta name="description" content="{{ app.name }}">
  {% include "../shared/favicons.swig" %}
  <link rel="stylesheet" href="{{ app.url }}/styles/vendors.css">
  {% block head %}{% endblock %}
</head>
<body>
  {% block body %}{% endblock %}

  <script src="{{ app.url }}/scripts/vendors.js"></script>
  {% block javascript %}{% endblock %}
</body>
</html>

<!doctype html>
<html class="no-js" lang="en">
<head>
  <meta charset="utf-8">
  <title>{% block title %}Home{% endblock %} - {{ app.name }}</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {% include "../shared/favicons.swig" %}
  <link rel="stylesheet" href="styles/vendors.css">
  {% block head %}{% endblock %}
</head>
<body>
  <div id="app">
    {% block body %}{% endblock %}
  </div>

  <script src="scripts/vendors.js"></script>
  {% block javascript %}{% endblock %}
</body>
</html>

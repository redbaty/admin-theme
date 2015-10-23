<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>{% block title %}Gulp Asset Pipeline{% endblock %}</title>
  <link rel="stylesheet" href="{{ app.url }}/styles/vendors.css">
  {% block head %}{% endblock %}
</head>
<body>
  <h1>Gulp All The Things!</h1>
  {% include "../shared/page-nav.html" %}
  {% block content %}{% endblock %}
  <footer>
    <p>Made with ♥ at <br>viget</p>
  </footer>
  <script src="{{ app.url }}/scripts/vendors.js"></script>
  {% block javascript %}{% endblock %}
</body>
</html>

{% extends 'base.swig' %}

{% block title %}Dashboard{% endblock %}

{% block head %}
  <link rel="stylesheet" href="styles/admin.css">
{% endblock %}

{% block body %}
  {% include "../shared/admin-header.swig" %}
  {% include "../shared/admin-sidebar.swig" %}

  <main id="contents">
    <div id="inner-contents">
      {% block contents %}{% endblock %}
    </div>
  </main>

  <footer id="footer">
    <div class="container-fluid">
      <p class="copyright">&copy; {{ app.client }}</p>
      <p class="appname">{{ app.name }} v{{ app.version }}</p>
    </div>
  </footer>
{% endblock %}

{% block javascript %}
  <script src="scripts/admin.js"></script>
{% endblock %}

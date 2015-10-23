{% extends 'base.swig' %}

{% block head %}
  <link rel="stylesheet" href="{{ app.url }}/styles/admin.css">
{% endblock %}

{% block body %}
  <header class="navbar navbar-light navbar-fixed-top">
  {% include "../shared/admin-header.swig" %}

  <ol class="breadcrumb">
    <li><a href="#">{% block title %}Home{% endblock %}</a></li>
    <li class="active">{% block subtitle %}Overview{% endblock %}</li>
  </ol>
  </header>

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
  <script src="{{ app.url }}/scripts/admin.js"></script>
{% endblock %}

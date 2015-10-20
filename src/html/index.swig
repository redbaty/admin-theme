{% extends 'layouts/admin.swig' %}

{% block content %}
  <img src="images/gulp.png" alt="gulp.js">
  <h4>Ubiquitous Social Icons!</h4>
  {% include "shared/social-icons-font.html" %}
  {% include "shared/social-icons-svg.html" %}
  <button id="button">Manually Load Async Module</button>
  <p data-module="Highlight">An auto-loaded async module highlighted this!</p>
{% endblock %}

{% block javascript %}
<script src="scripts/admin.js"></script>
{% endblock %}

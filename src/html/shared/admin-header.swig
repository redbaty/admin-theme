
<a class="navbar-brand" href="/">
  <span class="fa fa-hand-peace-o" aria-hidden="true"></span>
  <span class="text">{{ app.name }}</span>
</a>

<ol class="breadcrumb">
  <li><a href="#">{% block title %}Home{% endblock %}</a></li>
  <li class="active">{% block subtitle %}Overview{% endblock %}</li>
</ol>

{% include "admin-header-navbar.swig" %}

<button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
  <span class="sr-only">Toggle navigation</span>
  <span class="fa fa-bars" aria-hidden="true"></span>
</button>

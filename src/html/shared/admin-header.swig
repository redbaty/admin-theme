<header class="navbar navbar-dark bg-inverse navbar-fixed-top">
  <a class="navbar-brand" href="/">
    <span class="fa fa-hand-peace-o" aria-hidden="true"></span>
    <span class="text">{{ app.name }}</span>
  </a>
  {# <nav class="collapse navbar-toggleable-xs pull-right" id="bs-example-navbar-collapse-1"> #}
    {# {% include "admin-header-search.swig" %} #}
  {# </nav> #}
  {% include "admin-header-navbar.swig" %}

  <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
    <span class="sr-only">Toggle navigation</span>
    <span class="fa fa-bars" aria-hidden="true"></span>
  </button>
</header>

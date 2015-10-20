<header class="navbar navbar-app navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">
        <span class="glyphicon glyphicon-grain" aria-hidden="true"></span>
        <span class="text">Brand</span>
      </a>
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="glyphicon glyphicon-option-vertical" aria-hidden="true"></span>
      </button>
    </div>

    <nav class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      {% include "admin-header-search.swig" %}

      {% include "admin-header-navbar.swig" %}
    </nav>
  </div>
</header>

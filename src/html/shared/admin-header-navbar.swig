<ul class="nav navbar-nav pull-right">
  <li class="nav-item dropdown">
    <a href="#" id="user-dropdown" class="nav-link user-dropdown dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img src="//placehold.it/180x180" alt="User Avatar" class="img-rounded img-responsive">
      <span class="label label-pill label-danger">2</span>
    </a>
    <div class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="user-dropdown">
    {% for nav in navs.header %}
      {% if nav.type == 'devider' %}
        <div class="dropdown-divider"></div>
        {% if nav.title %}
          <h6 class="dropdown-header">{{ nav.title }}</h6>
        {% endif %}
      {% else %}
        <a class="dropdown-item" href="{{ app.url }}{{ nav.url }}">{{ nav.title }}</a>
      {% endif %}
    {% endfor %}
    </div>
  </li>
</ul>

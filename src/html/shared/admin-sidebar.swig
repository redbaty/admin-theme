<aside id="sidebar" class="collapse width navbar-toggleable-xs">
  <nav>
    <ul class="nav nav-pills nav-stacked" role="navigation">
    {% for sideNav in navs.sidebar %}
      <li class="nav-item" role="presentation">
        <a href="{{ app.url }}{{ sideNav.url }}" class="nav-link{% if sideNav.active == true %} active{% endif %}">
          <span class="link-icon fa fa-fw fa-{{ sideNav.icon }}" aria-hidden="true"></span>
        {% if sideNav.notif %}
          <span class="link-badge label label-pill label-default pull-right">{{ sideNav.notif }}</span>
        {% endif %}
          <span class="link-text">{{ sideNav.title }}</span>
        </a>
      </li>
    {% endfor %}
    </ul>
  </nav>
</aside>

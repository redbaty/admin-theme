<aside id="sidebar">
  <nav>
    <ul class="nav nav-pills nav-stacked" role="navigation">
    {% for nav in sidebarNav %}
      <li class="nav-item" role="presentation">
        <a href="{{ nav.url }}" class="nav-link{% if nav.active == true %} active{% endif %}">
          <span class="link-icon fa fa-fw fa-{{ nav.icon }}" aria-hidden="true"></span>
        {% if nav.notif %}
          <span class="link-badge label label-pill label-default pull-right">{{ nav.notif }}</span>
        {% endif %}
          <span class="link-text">{{ nav.title }}</span>
        </a>
      </li>
    {% endfor %}
    </ul>
  </nav>
</aside>

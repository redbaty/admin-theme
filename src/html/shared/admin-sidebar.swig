<aside id="sidebar">
  <nav>
    <ul class="nav nav-pills nav-stacked" role="navigation">
    {% for nav in sidebarNav %}
      <li class="nav-item" role="presentation">
        <a href="{{ nav.url }}" class="nav-link{% if nav.active == true %} active{% endif %}">
          <span class="fa fa-fw fa-{{ nav.icon }}" aria-hidden="true"></span>
          <span class="label label-pill label-default pull-right">4</span>
          <span>{{ nav.title }}</span>
        </a>
      </li>
    {% endfor %}
    </ul>
  </nav>
</aside>

{% extends 'layouts/admin.swig' %}

{% block title %}Dashboard{% endblock %}
{% block subtitle %}Overview{% endblock %}

{% block contents %}
  <div class="row">
  {% for card in dashboardCards %}
    <div class="col-lg-3">
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">{{ card.title }}</h4>
          <p class="card-text text-muted">{{ card.text }}</p>
        </div>
      </div>
    </div>
  {% endfor %}
  </div>
  <div class="row">
  {% for cards in columns %}
    <div id="{{ loop.key }}" class="col-lg-6">
    {% for colCard in cards %}
      <div class="card">
        <div class="card-header">{{ colCard.title }}</div>
        <div class="card-block">
          <p class="card-text text-muted">{{ colCard.text }}</p>
        </div>
      </div>
    {% endfor %}
    </div>
  {% endfor %}
  </div>
{% endblock %}

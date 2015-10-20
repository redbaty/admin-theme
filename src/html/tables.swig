{% extends 'layouts/admin.swig' %}

{% block title %}Dashboard{% endblock %}
{% block subtitle %}Overview{% endblock %}

{% block contents %}
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

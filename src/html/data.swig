{% extends 'layouts/admin.swig' %}

{% block title %}Main Data{% endblock %}
{% block subtitle %}Overview{% endblock %}

{% block contents %}
  <div id="data-toolbar" class="row">
    {% include 'shared/toolbar-data.swig' %}
  </div>

  <div id="dat-main" class="row">
    <div id="data-nav" class="col-sm-3">
      {% include 'shared/data-nav.swig' %}
    </div>
    <div id="data-content" class="col-sm-9">
      {% include 'shared/table-data.swig' %}
    </div>
  </div>
{% endblock %}

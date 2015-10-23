{% extends 'layouts/admin.swig' %}

{% block title %}Contacts{% endblock %}
{% block subtitle %}All Data{% endblock %}

{% block contents %}
  <div id="data-toolbar" class="row">
    {% include 'shared/toolbar-contacts.swig' %}
  </div>

  <div id="dat-main" class="row">
    <div id="data-nav" class="col-sm-5">
      {% include 'shared/table-contacts.swig' %}
    </div>
    <div id="data-content" class="col-sm-7">
      {% include 'shared/data-nav.swig' %}
    </div>
  </div>
{% endblock %}

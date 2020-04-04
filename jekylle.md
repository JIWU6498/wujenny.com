# Run
bundle exec jekyll serve

# Find static files in the layouts
```
{% for file in site.static_files %}
{{ file.path }}<br>
{% endfor %}
```

{% for file in site.static_files %}
  {% if file.javascript %}
  <script src="{{file.path}}" alt="{file.name}"></script>
  {% endif %}
  {{file.path}}<br>
{% endfor %}
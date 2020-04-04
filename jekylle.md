# Run
bundle exec jekyll serve

# Find static files in the layouts
```
{% for file in site.static_files %}
{{ file.path }}<br>
{% endfor %}
```
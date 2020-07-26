# JW-Website
# Jekyll notes
###  Run
bundle exec jekyll serve

### Find static files in the layouts
```
{% for file in site.static_files %}
{{ file.path }}<br>
{% endfor %}

{% for file in site.static_files %}
  {% if file.javascript %}
  <script src="{{file.path}}" alt="{file.name}"></script>
  {% endif %}
  {{file.path}}<br>
{% endfor %}

```

# Bootstrap Customization
There are many ways to customize Bootstrap files. 
* Customize the SASS by importing the styles in the sass:styles.scss
* @import "../node_modules/bootstrap/scss/bootstrap";
* write the customized styles in the custom.css.
After trying two ways, I decided to use second one since I think it would be faster for users get access to the css styles through the CDN.

# Resources
<div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<span>Photo by <a href="https://unsplash.com/@blakeconnally?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Blake Connally</a> on <a href="https://unsplash.com/s/photos/programming-art?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
</button><a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com</a>
<div>Icons made by <a href="https://www.flaticon.com/authors/inipagistudio" title="inipagistudio">inipagistudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

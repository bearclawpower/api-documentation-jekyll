---
layout: docs
title: Tags
permalink: /docs/services/tags/
---

[var_Images]: /docs/services/images
[var_Items]: /docs/services/items
[var_Products]: /docs/services/products


Tags are are a simple concept that most people are familiar with. Tags are emphasized, superlative words or terms that are associated to [Products][var_Products]. Tags 
such as: `Hot Seller`, `Rugged`, `Made in USA`, `Cold Weather`, `Popular`, `Heavy-duty`, `Featured`, `Best`, `Christmas`, `Universal`, and the list goes on.

Tags allow us to mark certain [Products][var_Products] for the purpose of highlighting them, presenting them in a unique fashion, or displaying them in different areas of our sites. 

<div class="note unreleased">
  <h5>Future enhancement</h5>
  <p>Currently, we've only applied a few Tags to a few Products. As time goes on we will be associating many more. In the future, we may even consider associating Tags to other 
  services like Blocks, Items, Images, Vehicles, etc.</p>
</div>

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/tags
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/tags/25
```

...or send multiple ids separated by a comma(,)

```
{{ site.api_protocol }}{{ site.api_url }}/tags/10,7
```

##### Associated [Images][var_Images]

```
{{ site.api_protocol }}{{ site.api_url }}/tags/25/images
```

##### Associated [Items][var_Items]

```
{{ site.api_protocol }}{{ site.api_url }}/tags/25/items
```

##### Associated [Products][var_Products]

```
{{ site.api_protocol }}{{ site.api_url }}/tags/23/products
```

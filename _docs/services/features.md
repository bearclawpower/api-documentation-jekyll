---
layout: docs
title: Features
permalink: /docs/services/features/
---

[var_Products]: /docs/services/products

Features are a distinctive characteristic, trait, or aspect of a [Product][var_Products].

In the industry, these are typically referred to as the "bullet points" of a product. In previous versions of the API, the description and bullet points were lumped together into 
one mix-mash of raw strings combined with formatting and other HTML-style markup that produced bullet points. Not ideal if you try to utilize these on, for example, a website 
product detail page and style and display them in a meaningful fashion.

In Version 4 of the WPS API, an effort was made to separate the *description* of a product from the *bullet points*. We've cleaned up all of that and now clearly separate a 
[Products][var_Products] description from its Features.

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/features
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/features/673
```

##### Parent Product

Get the [Product][var_Products] that a particular feature belongs to.

```
{{ site.api_protocol }}{{ site.api_url }}/features/673/product
```

---
layout: docs
title: Images
permalink: /docs/services/images/
---

[var_Blocks]: /docs/services/blocks
[var_Brands]: /docs/services/brands
[var_Items]: /docs/services/items
[var_Posts]: /docs/services/posts
[var_Products]: /docs/services/products
[var_Tags]: /docs/services/tags
[var_Taxonomyterms]: /docs/services/taxonomyterms

The Images endpoint allows you to retrieve information about images and their relationships to other services. The information includes things like image MIME type, size, and 
static references to the images location on the web. 

Because Images are polymorphic and can be associated with many different services, chances are you would get the `id` of the Image from some other service and then use the Image 
endpoint to look up *other* relationships of interest in regards to that particular Image.

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/images
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/images/96
```

...or send multiple ids separated by a comma(,)

```
{{ site.api_protocol }}{{ site.api_url }}/images/96,52207,49944,18220,51112,48572
```

##### Associated [Blocks][var_Blocks]

```
{{ site.api_protocol }}{{ site.api_url }}/images/49944/blocks
```

##### Associated [Brands][var_Brands]

```
{{ site.api_protocol }}{{ site.api_url }}/images/96/brands
```

##### Associated [Items][var_Items]

```
{{ site.api_protocol }}{{ site.api_url }}/images/18220/items
```

##### Associated [Posts][var_Posts]

```
{{ site.api_protocol }}{{ site.api_url }}/images/51112/posts
```

##### Associated [Products][var_Products]

```
{{ site.api_protocol }}{{ site.api_url }}/images/48572/products
```

##### Associated [Tags][var_Tags]

```
{{ site.api_protocol }}{{ site.api_url }}/images/1/tags
```

##### Associated [Taxonomyterms][var_Taxonomyterms]

```
{{ site.api_protocol }}{{ site.api_url }}/images/49957/taxonomyterms
```

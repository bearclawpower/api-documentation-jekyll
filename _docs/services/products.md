---
layout: docs
title: Products
permalink: /docs/services/products/
---

[var_Affinities]: /docs/services/affinities
[var_Attributes]: /docs/services/attributes
[var_Attributekeys]: /docs/services/attributes/#attributekeys
[var_Attributevalues]: /docs/services/attributes/#attributevalues
[var_Blocks]: /docs/services/blocks
[var_Features]: /docs/services/features
[var_Images]: /docs/services/images
[var_Items]: /docs/services/items
[var_Resources]: /docs/services/resources
[var_Tags]: /docs/services/tags
[var_Taxonomyterms]: /docs/services/taxonomyterms

A Product is a logical grouping of [Items][var_Items] and is at the core of a concept that is new to the v4 API called **product variants**, or **variations of a product**. A 
product variant is a specific [Item][var_Items] that is grouped with related variants that together form a Product. Variants usually vary from each other in one or more properties 
(or [Attributes][var_Attributes]). For example, a medium-sized, green shirt with a SKU of `12345` is one product variant of the shirt product; together size, color, and 
SKU form one variant.

<div class="note info">
    <h5>Note</h5>
    <p>It is important to understand the difference between Products and Items. Products are not a tangible, physical object meaning they are not the actual merchandise that a 
    customer would purchase as Products themselves do not have a SKU or Price. Products are merely a mechanism for ultimately arriving at an Item.</p>
</div>

By itself, a Product isn't much more than a *name* and *description*, but as you start gathering up all its associated services you'll soon realize that a 
Product is at the core of what the WPS API really provides.

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/products
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997
```

##### Associated [Attributekeys][var_Attributekeys]

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997/attributekeys
```

##### Associated [Attributevalues][var_Attributevalues]

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997/attributevalues
```

##### Associated [Blocks][var_Blocks]

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997/blocks
```

##### Associated [Features][var_Features]

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997/features
```

##### Associated [Images][var_Images]

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997/images
```

##### Associated [Items][var_Items]

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997/items
```

##### Associated [Resources][var_Resources]

```
{{ site.api_protocol }}{{ site.api_url }}/products/26/resources
```

##### Associated [Tags][var_Tags]

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997/tags
```

##### Associated [Taxonomyterms][var_Taxonomyterms]

```
{{ site.api_protocol }}{{ site.api_url }}/products/207997/taxonomyterms
```

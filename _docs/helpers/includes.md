---
layout: docs
title: Includes
permalink: /docs/helpers/includes/
---

[var_Attributekeys]: /docs/services/attributekeys
[var_Attributevalues]: /docs/services/attributevalues
[var_Brands]: /docs/services/brands
[var_Images]: /docs/services/images
[var_Items]: /docs/services/items
[var_Products]: /docs/services/products
[var_Tags]: /docs/services/tags
[var_Taxonomyterms]: /docs/services/taxonomyterms

One of the most practical and convenient functions of the API, *includes* are essentially a way to nest one service within another service based on the relationship they have 
with each another. This fundamental feature makes your requests much more efficient and greatly reduces the need to make multiple requests to gather all the pieces of 
data you desire.

Probably the most commonly used example of this functionality would be to request [Products][var_Products] with their associated [Items][var_Items] included.
```
{{ site.api_protocol }}{{ site.api_url }}/products?include=items
```

Instead of retrieving an [Item][var_Items], making note of the `product_id` on the [Item][var_Items], and making another request to get the parent [Product][var_Products]; we can simply get the 
[Product][var_Products] and *include* all of it's associated [Items][var_Items].

<div class="note info">
  <h5>Works with any valid relationship</h5>
  <p>Includes are not limited to parent/child relationships; you can also get child/parent relationships. This allows you to incorporate any parent service within a child service 
  provided they have appropriate relationship to one another.</p>
</div>

Using the same idea as the previous example but reversing the parent/child relationship, we can retrieve [Items][var_Items] with their associated [Product][var_Products] included.
```
{{ site.api_protocol }}{{ site.api_url }}/items?include=product
```
<span class="text-pink">Pay special attention to singularity versus plurality of this request.</span> A [Product][var_Products] can have many [Items][var_Items], but an 
[Item][var_Items] only belongs to one [Product][var_Products].

## Multiple includes
You can also combine multiple includes to produce even more powerful queries. Just separate each include with a comma (,).
```
{{ site.api_protocol }}{{ site.api_url }}/products?include=features,images,items,tags
```

## Collection or Entities
Includes work the same on *collection* or *entity* requests. If we were to request one particular [Product][var_Products] and include all it's [Taxonomyterms][var_Taxonomyterms], the 
request would look something like this:
```
{{ site.api_protocol }}{{ site.api_url }}/products/207976?include=taxonomyterms
```

## More Examples

Get a collection of [Items][var_Items] and include the [Images][var_Images] associated with each of them.
```
{{ site.api_protocol }}{{ site.api_url }}/items?include=images
```

Get a collection of [Attributekeys][var_Attributekeys] and include the [Attributevalues][var_Attributevalues] associated with each of them.
```
{{ site.api_protocol }}{{ site.api_url }}/attributekeys?include=attributevalues
```

Get a collection of [Attributevalues][var_Attributevalues] and include the **one parent** [Attributekey][var_Attributekeys] associated to each of them.
```
{{ site.api_protocol }}{{ site.api_url }}/attributevalues?include=attributekey
```

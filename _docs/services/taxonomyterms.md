---
layout: docs
title: Taxonomyterms
permalink: /docs/services/taxonomyterms/
---

[var_Images]: /docs/services/images
[var_Products]: /docs/services/products
[var_Vehiclemodels]: /docs/services/vehiclemodels
[var_Vocabularies]: /docs/services/vocabularies

Taxonomyterms are a scheme of classification as it relates to the different services in our API. It is an order or arrangement of different [Images][var_Images], 
[Products][var_Products], or [Vehiclemodels][var_Vehiclemodels] into categories. In the past, the WPS print catalogs were our primary method of categorization. This is no longer 
the case with the addition of [Vocabularies][var_Vocabularies] and their associated Taxonomyterms in Version 4 of the WPS API.

Taxonomyterms are children of [Vocabularies][var_Vocabularies] and have a one-to-many Vocabulary&rarr;Taxonomyterms relationship.

<div class="note">
  <h5>Pro Tip</h5>
  <p>Taxonomyterms utilize a <a href="https://en.wikipedia.org/wiki/Nested_set_model" target="_blank">Nested set model</a> that allows us to manage and access hierarchical tree 
  data in a performant manner.</p>
</div>

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1
```

...or send multiple ids separated by a comma(,)

```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/53,51,37
```

##### Associated [Images][var_Images]

```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1/images
```

##### Associated [Products][var_Products]

```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1/products
```

##### Associated [Vehiclemodels][var_Vehiclemodels]

```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1/vehiclemodels
```

##### Parent [Vocabulary][var_Vocabularies]

```
{{ site.api_protocol }}{{ site.api_url }}/taxonomyterms/1/vocabulary
```

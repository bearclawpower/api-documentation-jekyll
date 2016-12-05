---
layout: docs
title: Countries
permalink: /docs/services/countries/
---

[var_Items]: /docs/services/items

Countries in the WPS API refer to the **Country of Origin** of an [Item][var_Items] in an [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) alpha-2 code format. This endpoint allows you to retrieve a *collection* of all our Countries, or the data surrounding a specific Country 
via the *entity* endpoint. The Countries endpoint also allows you to retrieve the associated relationships that Countries have with other services.

## Example requests

##### Collection
```sh
{{ site.api_protocol }}{{ site.api_url }}/countries
```

##### Entity
This request will return the entity with details like the Country `name` and Country `code`. Like in this example, the Country **id** of `101` = "Italy".
```sh
{{ site.api_protocol }}{{ site.api_url }}/countries/101
```

##### Associated Items
Get all the [Items][var_Items] associated with the Country of "Italy".
```sh
{{ site.api_protocol }}{{ site.api_url }}/countries/101/items
```

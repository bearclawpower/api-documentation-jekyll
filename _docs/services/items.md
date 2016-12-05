---
layout: docs
title: Items
permalink: /docs/services/items/
---

[var_Attributevalues]: /docs/services/attributes/#attributevalues
[var_Countries]: /docs/services/countries
[var_Images]: /docs/services/images
[var_Products]: /docs/services/products
[var_Tags]: /docs/services/tags
[var_Vehicles]: /docs/services/vehicles

Items are the building blocks of a [Product][var_Products]. They are simplest form of a [Product][var_Products] and refer to one individual variant (specific configuration) or 
**SKU** of a [Product][var_Products]. For example: the *FLY Patrol Jersey* is a [Product][var_Products], whereas the *SKU:370-6402X 2X-Large Black/Grey FLY Patrol Jersey* is an Item.

<table>
    <thead>
        <tr>
            <th>Products</th>
            <th>Items</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                FLY Patrol Jersey
            </td>
            <td>
                <p><strong>370-640S</strong> &rarr; Small &rarr; Black/Grey &rarr; FLY Patrol Jersey</p>
                <p><strong>370-640M</strong> &rarr; Medium &rarr; Black/Grey &rarr; FLY Patrol Jersey</p>
                <p><strong>370-640L</strong> &rarr; Large &rarr; Black/Grey &rarr; FLY Patrol Jersey</p>
                <p><strong>370-640X</strong> &rarr; X-Large &rarr; Black/Grey &rarr; FLY Patrol Jersey</p>
                <p><strong>370-6402X</strong> &rarr; 2X-Large &rarr; Black/Grey &rarr; FLY Patrol Jersey</p>
                ...
            </td>
        </tr>
        <tr>
            <td>
                FLY Trekker Helmet
            </td>
            <td>
                <p><strong>73-1010XS</strong> &rarr; X-Small &rarr; Gloss Black &rarr; Trekker Helmet</p>
                <p><strong>73-1010S</strong> &rarr; Small &rarr; Gloss Black &rarr; Trekker Helmet</p>
                <p><strong>73-1010M</strong> &rarr; Medium &rarr; Gloss Black &rarr; Trekker Helmet</p>
                ...
                <p><strong>73-1014XS</strong> &rarr; X-Small &rarr; Hi-Vis Yellow &rarr; Trekker Helmet</p>
                <p><strong>73-1014S</strong> &rarr; Small &rarr; Hi-Vis Yellow &rarr; Trekker Helmet</p>
                <p><strong>73-1014M</strong> &rarr; Medium &rarr; Hi-Vis Yellow &rarr; Trekker Helmet</p>
                ...
            </td>
        </tr>
    </tbody>
</table>

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/items
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/items/216584
```

##### Associated [Attributevalues][var_Attributevalues]

```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/attributevalues
```

##### Parent [Country][var_Countries]

```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/country
```

##### Associated [Images][var_Images]

```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/images
```

##### Parent [Product][var_Products]

```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/product
```

##### Associated [Tags][var_Tags]

```
{{ site.api_protocol }}{{ site.api_url }}/items/216584/tags
```

##### Associated [Vehicles][var_Vehicles]

```
{{ site.api_protocol }}{{ site.api_url }}/items/81897/vehicles
```

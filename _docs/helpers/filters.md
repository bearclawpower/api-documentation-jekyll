---
layout: docs
title: Filters
permalink: /docs/helpers/filters/
---

[var_Items]: /docs/services/items
[var_Products]: /docs/services/products
[var_Tags]: /docs/services/tags

Filters give the ability to narrow down the results of a request to specific subset of data based on properties of the service.

The parameter syntax structure is: <code>?filter[<span class="text-blue">field</span>][<span class="text-green">operator</span>]=<span class="text-pink">value</span></code>.

<table>
    <thead>
        <tr>
            <th colspan="2">Operators</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><code>[eq]</code></p>
            </td>
            <td>
                <p>Equal<span class="text-pink">*</span></p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code>[ne]</code></p>
            </td>
            <td>
                <p>Not equal</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code>[lt]</code></p>
            </td>
            <td>
                <p>Less than</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code>[lte]</code> or <code>[le]</code></p>
            </td>
            <td>
                <p>Less than or equal to</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code>[gt]</code></p>
            </td>
            <td>
                <p>Greater than</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code>[gte]</code> or <code>[ge]</code></p>
            </td>
            <td>
                <p>Greater than or equal to</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code>[pre]</code></p>
            </td>
            <td>
                <p>Prefix / Starts with</p>
            </td>
        </tr>
    </tbody>
</table>

<p class="align-right"><small class="text-pink">* Default behavior if an operator is not sent.</small></p>

## Examples

### Items

In this example, only [Items][var_Items] with a `brand_id` of `135` (*FLY Racing*) would be returned.
```
{{ site.api_protocol }}{{ site.api_url }}/items?filter[brand_id]=135
```

In this example, only [Items][var_Items] with a `list_price` of **less than** `200` dollars would be returned.
```
{{ site.api_protocol }}{{ site.api_url }}/items?filter[list_price][lt]=200
```

You can also combine multiple filters to produce even more powerful queries.

In this example, only [Items][var_Items] with a `list_price` of **greater than** `200` dollars **and** less than `400` dollars would be returned.
```
{{ site.api_protocol }}{{ site.api_url }}/items?filter[list_price][gt]=200&filter[list_price][lt]=400
```

In this example, only [Items][var_Items] with a `sku` that are **prefixed with** `87-4` would be returned.
```
{{ site.api_protocol }}{{ site.api_url }}/items?filter[sku][pre]=87-4
```

### Products

In this example, only [Products][var_Products] with a `name` that are **prefixed with** `GM5` would be returned.
```
{{ site.api_protocol }}{{ site.api_url }}/products?filter[name][pre]=GM5
```

You can also filter the associations of a Product.

In this example, only a [Products][var_Products] [Tags][var_Tags] with a `name` that are **prefixed with** `Popu` would be returned.
Since the following request ultimately returns [Tags][var_Tags], what we are filtering is the [Tags][var_Tags].
```
{{ site.api_protocol }}{{ site.api_url }}/products/208016/tags?filter[name][pre]=Popu
```

<div class="note">
    <h5>Pro Tip&rarr; You can use filters on any endpoint</h5>
    <p>Keep in mind that you can use filters on more than just <a href="">Items</a> and <a href="">Products</a>. Filters work on any service throughout the API.</p>
</div>

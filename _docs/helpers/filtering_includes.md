---
layout: docs
title: Filtering Includes
permalink: /docs/helpers/filtering_includes/
---

[var_Brands]: /docs/services/brands
[var_Items]: /docs/services/items
[var_Products]: /docs/services/products
[var_Tags]: /docs/services/tags

[var_Helpers_Filters]: /docs/helpers/filters
[var_Helpers_Includes]: /docs/helpers/includes

Much like standard [Filters][var_Helpers_Filters], filtering [includes][var_Helpers_Includes] gives you the ability to narrow down the results of a request to specific subset of data. The difference is what you 
are operating on. The includes themselves are the part of the response that is being filtered, not the primary service.

For example, when you make a request like `/products?include=items:filter(brand_id|135)`, what you are actually saying is: *Give me all [Products][var_Products], and include 
their [Items][var_Items], but only return those included [Items][var_Items] that are of [Brand][var_Brands] 135 (FLY Racing)*. You are still going to get **all** 
[Products][var_Products], that part doesn't change, the only part of the response that changes is the included [Items][var_Items] will be filtered down to FLY Racing 
[Items][var_Items].

The parameter syntax structure is: <code>?include=<span class="text-"><em>service</em></span>:filter(<span class="text-blue">field</span>|<span class="text-green">value</span>|<span class="text-pink">operator</span>)</code>.

<table>
    <thead>
        <tr>
            <th colspan="2">Operators</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><code class="text-pink">eq</code></p>
            </td>
            <td>
                <p>Equal<span class="text-pink">*</span></p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="text-pink">ne</code></p>
            </td>
            <td>
                <p>Not equal</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="text-pink">lt</code></p>
            </td>
            <td>
                <p>Less than</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="text-pink">lte</code> or <code class="text-pink">le</code></p>
            </td>
            <td>
                <p>Less than or equal to</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="text-pink">gt</code></p>
            </td>
            <td>
                <p>Greater than</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="text-pink">gte</code> or <code class="text-pink">ge</code></p>
            </td>
            <td>
                <p>Greater than or equal to</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="text-pink">pre</code></p>
            </td>
            <td>
                <p>Prefix / Starts with</p>
            </td>
        </tr>
    </tbody>
</table>

<p class="align-right"><small class="text-pink">* Default behavior if an operator is not sent.</small></p>

## Examples

In this example, all the [Products][var_Products] along with their included [Items][var_Items] would be returned. However, the included [Items][var_Items] would be filtered down 
to only the [Items][var_Items] that have a `list_price` of **Less than** `200` dollars.
```
{{ site.api_protocol }}{{ site.api_url }}/products?include=items:filter(list_price|200|lt)
```

In this example, all the [Products][var_Products] along with their included [Items][var_Items] would be returned. However, the included [Items][var_Items] would be filtered down 
to only the [Items][var_Items] that have a `sku` that is **Prefixed with** `87-40`.
```
{{ site.api_protocol }}{{ site.api_url }}/products?include=items:filter(sku|87-40|pre)
```

<div class="note">
    <h5>Pro Tip&rarr; You can filter includes on any endpoint</h5>
    <p>Keep in mind that you can use filters on more than just <a href="">Items</a> and <a href="">Products</a>. Filters work on any service throughout the API.</p>
</div>

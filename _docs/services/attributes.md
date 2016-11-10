---
layout: docs
title: Attributes
permalink: /docs/services/attributes/
---

[Attributekeys]: /docs/attributekeys/collection
[Attributevalues]: /docs/attributevalues/collection
[Items]: /
[Products]: /

Attributes are a quality or feature regarded as a characteristic or inherent part of a parent object. We apply attributes to [Items][Items] (and sometimes [Products][Products]) 
periodically as they make their way through our system. Attributes are separated into two parts: [Attributekeys][Attributekeys] and [Attributevalues][Attributevalues]. Think of them as a key/value pair that are 
interdependent and never really used separately.

<p class="align-center">
    <code class="flag">Attributekey</code> : <code class="option">Attributevalue</code>
</p>

An example of probably the most common Attributekey would be <code class="flag">Color</code> and an example of a common Attributevalue would be <code class="option">Red</code>. Naturally, together that combination would apply to all the items of which we classify as being <em>red</em> in color. Another common attribute example would be "Size : Large" where <code class="flag">Size</code> is the Attributekey and <code class="option">Large</code> is the Attributevalue.

More examples (there are hundreds):

<table>
    <thead>
        <tr>
            <th><span class="flag">Attributekey</span></th>
            <th><span class="option">Attributevalue</span></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><code class="flag">Color</code></p>
            </td>
            <td>
                <p><code class="option">Red</code></p>
                <p><code class="option">Green</code></p>
                <p><code class="option">Blue</code></p>
                ...
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="flag">Size</code></p>
            </td>
            <td>
                <p><code class="option">Small</code></p>
                <p><code class="option">Medium</code></p>
                <p><code class="option">Large</code></p>
                <p><code class="option">Extra Large</code></p>
                ...
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="flag">Finish</code></p>
            </td>
            <td>
                <p><code class="option">Machined</code></p>
                <p><code class="option">Natural</code></p>
                <p><code class="option">Polished</code></p>
                <p><code class="option">Stainless</code></p>
                ...
            </td>
        </tr>
        <tr>
            <td>
                <p><code class="flag">Material</code></p>
            </td>
            <td>
                <p><code class="option">Aluminum</code></p>
                <p><code class="option">Carbon Kevlar</code></p>
                <p><code class="option">Nickel-Chrome-Molybdenum</code></p>
                <p><code class="option">Plastic</code></p>
                ...
            </td>
        </tr>
    </tbody>
</table>

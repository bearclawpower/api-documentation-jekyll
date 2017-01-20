---
layout: docs
title: Vocabularies
permalink: /docs/services/vocabularies/
---

[var_Taxonomyterms]: /docs/services/taxonomyterms

Vocabularies are what determines a set of [Taxonomyterms][var_Taxonomyterms]. They are the parent of several [Taxonomyterms][var_Taxonomyterms] and acts as the container that 
holds the grouping of [Taxonomyterms][var_Taxonomyterms] inside.

## Example requests

##### Collection

```
{{ site.api_protocol }}{{ site.api_url }}/vocabularies
```

##### Entity

```
{{ site.api_protocol }}{{ site.api_url }}/vocabularies/3
```

...or send multiple ids separated by a comma(,)

```
{{ site.api_protocol }}{{ site.api_url }}/vocabularies/1,2,3,7,8,10,11
```

##### Associated [Taxonomyterms][var_Taxonomyterms]

```
{{ site.api_protocol }}{{ site.api_url }}/vocabularies/3/taxonomyterms
```

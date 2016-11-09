---
layout: docs
title: Quick-start guide
permalink: /docs/quickstart/
---

TLDR; For the impatient, here's how to make a request to our API.

```sh
~ $ curl -H "Authorization: Bearer Abc123XYZ" http://api.wps-inc.com/items
```

Assuming you have completed the [signup process][Signup] and have been issued an access token, that request will return a list of [Items][Items].

<div class="note info">
  <h5>Just an example</h5>
  <p>Keep in mind that there are many, many other ways to make HTTP requests besides <code>curl</code>. We'll go into more detail throughout the documentation but the cURL example is one 
  that many programmers/developers/engineers are familiar with.</p>
</div>

Which brings us a very important point...

# Before you begin
If you're reading this documentation, chances are you are interested in obtaining data from us in a server-to-server automated fashion. If you are not, you may find the 
[Data Depot download area][Data Depot] more useful as it allows you to download the data in a point-and-click fashion for import into your system.

<div class="note warning">
  <h5>The obligatory out-of-your-depth warning</h5>
  <p>The API is designed to be used by programmers who are familiar with the transmission of data via HTTP in a RESTful way. If you do not understand what those technologies mean, 
  you may need to hire a programmer or recruit additional help from a third party.</p>
</div>

Simply put, if you are a programmer, I.T. manager, and/or a technology professional seeking a way to acquire and transmit data to and from Western Power Sports, 
continue reading.

[Signup]: /
[Items]: /
[Data Depot]: http://www.wps-inc.com/data-depot

---
layout: docs
title: Authentication
permalink: /docs/authentication/
---

To use any part of the WPS API, you’ll need an *API access token*. The WPS API uses access tokens to associate requests to API resources with your account.

## What is an API Access Token?
An access token is a unique identifier of an application requesting access to our service. When you sign up, we review your submissions and generate an API access token for your 
application to use when requesting our API service. We can then match the token you provide to the one we store on our side in order to authenticate. API access tokens are a 
replacement to sending some username/password combination over HTTP which is not as secure.

<div class="note warning">
  <h5>Warning</h5>
  <p>Remember to keep your access tokens secret; treat them just like passwords! They act on your behalf when interacting with the API. Don't hard-code them into your programs. 
  Instead, opt to use them as environment variables.</p>
</div>

## Using your token
<em>"Okay, I signed up, I was issued an API access token, now what?"</em>

Access tokens are used in the `Authorization` header of your HTTP requests.

For example:

```
Authorization: Bearer AzH7wRqmXmQg63EXAMPLEdrYIynLrRyZHJCEaz0jT
```

<div class="note">
    <img src="/img/postman-logo-1478715430.png" width="100" style="float: right;">
    <h5>Pro Tip&rarr; Grab a good REST Client</h5>
    <p>A great way to try out our API and practice making HTTP requests is with a good REST client tool like <a href="http://www.getpostman.com/" target="_blank">Postman</a>. 
    Postman is a <strong>free</strong> extension for the Google Chrome browser that helps developers test APIs.</p>
</div>

Using your access token in Postman would look something like this:

![Postman screenshot](/img/authentication-01-1478715172.png)

## Permission Scopes
Every access token that is issued has permissions to make certain types of requests to the WPS API – these are called scopes.

## Revocation
API access tokens align with account permissions. If your account is deleted or if you are no longer allowed access to our API, your tokens will be revoked.

<div class="note info">
  <h5>Note</h5>
  <p>API access tokens can only be removed by WPS. As a dealer, or someone working for a dealer, you cannot remove/revoke your own access token. Contact us if you need your API 
  access modified in any way.</p>
</div>

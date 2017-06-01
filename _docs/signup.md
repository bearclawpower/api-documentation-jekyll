---
layout: docs
title: Sign-up
permalink: /docs/signup/
---

## Requesting an API access token

To get started using any version of our API, you must be an active dealer in good standing with Western Power Sports. Use this sign-up form to gain access to our API. This is the 
first step you'll need to take before you can start making requests to our API.

<div class="note warning">
  <h5>Dealers Only</h5>
  <p>The sign-up form is for WPS account holders, not to be used by application developers. It is important that the account holder themselves be the one who fills out the sign-up 
  form and not a third party or programmer working for the account holder. If you are a developer working for a WPS dealer, please instruct the dealer to sign up and then 
  give you the access token after it is issued to them.</p>
</div>

## Approval process

Please allow 1-3 business days for your submission to be approved and your information to be added into our system. Once approved your will receive an email stating that you have 
been approved and are ready to begin accessing our data.

## Sign-up Form

<div class="mobile-side-scroller">
    <form id="signup-form" action="" method="post" accept-charset="utf-8">
        <table>
            <thead>
                <tr>
                    <th colspan="2">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="align-right width-25-percent">
                        <p>
                            <label for="name"><strong>Name <span class="text-pink" title="This field is required.">*</span></strong></label>
                        </p>
                    </td>
                    <td>
                        <div><input type="text" name="name" class="width-50-percent" value="" autofocus required></div>
                        <p>Enter your full name. (ie. John Doe)</p>
                    </td>
                </tr>
                <tr>
                    <td class="align-right width-25-percent">
                        <p>
                            <label for="phone"><strong>Phone <span class="text-pink" title="This field is required.">*</span></strong></label>
                        </p>
                    </td>
                    <td>
                        <div><input type="tel" name="phone" class="width-33-percent" value="" required></div>
                        <p>A good number to reach you at. (ie. 800-999-3388)</p>
                    </td>
                </tr>
                <tr>
                    <td class="align-right width-25-percent">
                        <p>
                            <label for="email"><strong>Email <span class="text-pink" title="This field is required.">*</span></strong></label>
                        </p>
                    </td>
                    <td>
                        <div><input type="email" name="email" class="width-50-percent" value="" required></div>
                        <p>Your email address. (ie. john@example.com)</p>
                    </td>
                </tr>
                <tr>
                    <td class="align-right width-25-percent">
                        <p>
                            <label for="dealer_id"><strong>Dealer ID <span class="text-pink" title="This field is required.">*</span></strong></label>
                        </p>
                    </td>
                    <td>
                        <div><input type="text" name="dealer_id" class="width-33-percent" value="" required></div>
                        <p>
                            Enter the <em>Dealer Identifier</em> that was assigned to you by Western Power Sports when you became a dealer. (Your wpsorders.com dealer number. ie. D1234567)
                        </p>
                    </td>
                </tr>
                <tr>
                    <td class="align-right width-25-percent">
                        <p>
                            <label for="comments"><strong>Comments</strong></label>
                        </p>
                    </td>
                    <td>
                        <div><textarea name="comments" rows="5" class="width-100-percent"></textarea></div>
                        <p>Optionally include any comments, questions, or concerns you have.</p>
                    </td>
                </tr>
                <tr>
                    <td class="align-right">
                        <p class="text-pink"><strong>* required</strong></p>
                    </td>
                    <td>
                        <button type="submit" name="submit" value="Submit">Submit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</div>

<div class="note info">
  <h5>IP Address no longer required</h5>
  <p>In previous versions of the API we required dealers to provide the static IP address of the web server being used to make requests to our API. This is no longer a requirement 
  in the WPS API v4.</p>
</div>

Now that you’re signed up, let’s get to work!

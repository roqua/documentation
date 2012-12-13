# RoQua Technical Rider [DRAFT]

In theater and musical performances, a technical rider is often used to document
the various requests and demands in order to ensure that the performance can
take place.

This rider describes the various moving parts we need to set up with customers,
and can be used as reference document by the customer to ask their technical
staff for an estimate of the effort required and the timeline on which these
conditions can be met.

## VPN

To protect the transmission of HL7 traffic, we need to set up an encrypted VPN
tunnel to your network.

* Our network is using the 10.0.0.0/8 range internally. Yours probably does too.
  To prevent collisions and routing problems we should pick one of the other
  private ranges for our VPN-traffic, e.g. 172.16.0.0/12.

* We would like to set up monitoring to check that the VPN is actually responsive.
  For this, we will need one IP-address on your end that responds to `ping`. We
  will provide an IP on our end, so you can do the same. If you cannot provide
  this, we cannot check that the VPN is not silently failing, and hence, we will
  not be able to proactively contact you about problems.

## HL7 Traffic

TODO

## Web Application Monitoring

TODO
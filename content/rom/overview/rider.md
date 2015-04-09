---
title: Technical Rider
status: stable
---

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

* As VPN endpoints, we prefer to set up VPNs between two public IP addresses.
  This prevents any kind of collision between IP addresses used by either us,
  or other parties that have VPNs with us.

  If this is absolutely impossible, our network is using the 10.0.0.0/8 range
  internally. Yours probably does too. To prevent collisions and routing
  problems we should pick IP addresses in of the other private ranges,
  e.g. 172.16.0.0/12.

* We would like to set up monitoring to check that the VPN is actually responsive.
  For this, we will need one IP-address on your end that responds to `ping`. We
  will provide an IP on our end, so you can do the same. If you cannot provide
  this, we cannot check that the VPN is not silently failing, and hence, we will
  not be able to proactively contact you about problems.

## Required ports on the VPN

Number  | Environment | Direction          | Purpose
--------|-------------|--------------------|----------
`60201` | Staging     | From RoQua to you  | HL7 QRY^A19
`60202` | Staging     | From RoQua to you  | HL7 ORU^R01
`60203` | Staging     | From you to RoQua  | HL7 MFN (unused for now)
`60204` | Staging     | From you to RoQua  | HL7 ADT^A40
`60401` | Production  | From RoQua to you  | HL7 QRY^A19
`60402` | Production  | From RoQua to you  | HL7 ORU^R01
`60403` | Production  | From you to RoQua  | HL7 MFN (unused for now)
`60404` | Production  | From you to RoQua  | HL7 ADT^A40

## Web Application Monitoring

We provide a service health API endpoint that you can use to check the various
subsystems of RoQua. See [Service Health](/developer/rom/global/service_health/).

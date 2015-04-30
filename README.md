RoQua Public Documentation
=================

This repository contains user manuals and API documentation for RoQua's products. The nicely formatted version [can be found here](http://docs.roqua.net/).

Local development / preview
===========================

Running guard start a local server and recompiles the doc files when changed.

    bundle exec guard
    open http://localhost:9093/


Publish to http://docs.roqua.net
================================

The rendered version is hosted in an S3 bucket. CircleCI will deploy there when all tests pass.

RoQua API & Integrations
========================

This repository contains an overview of the integrations and APIs that RoQua
provides. The nicely formatted version [can be found here](http://roqua.github.io/developer/).


Local development / preview
=============

Running guard starts a local server and recompiles the doc files when changed.

    bundle exec guard
    open http://localhost:9093/developer


Publish to http://roqua.github.io/developer
===========================================

CircleCI will push to the github pages when the tests pass.

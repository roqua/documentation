## RoQua Public Documentation

This repository contains user manuals and API documentation for RoQua's products. The nicely formatted version [can be found here](http://docs.roqua.net/).

### Local development / preview

Running guard start a local server and recompiles the doc files when changed.

    bundle exec guard
    open http://localhost:9093/

This can be unworkably slow to react to file changes under osx. To run manually:

Run `bundle exec nanoc compile`

### Publish to http://docs.roqua.net

The rendered version is hosted on Gitlab. Any changes to the master branch will become live as soon as the CI pipeline finishes.

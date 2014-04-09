---
title: OpenCPU - Usage in Quby
status: draft
---

Following example shows how to generate a `score` in Quby called `:auth_token`. This `score` contains an SHA1 hash
calculated with shared secret key `"foo"` and object `"bar"`. The score will be presented to a user as 'Authentication
Token'.

``` ruby
  score :auth_token, label: 'Authentication Token' do
    data = opencpu('digest', 'hmac', key: 'foo', object: 'bar', algo: 'sha1')

    {value: data.first}
  end
```

## #opencpu(package, function, arguments_hash)

Encodes `arguments_hash` to a JSON string and sends it to a `function` inside of `project` on the OpenCPU server.

### Arguments

* package (String) - provide the name of your package
* function (String) - which function needs to be run
* arguments_hash (Hash) - a hash of keys and values which correspond to arguments and values in given R function

### Response

Returns JSON parsed into Ruby. Depending on the package it could be a Hash or an Array.

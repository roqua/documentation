---
title: How it Works
status: draft
---

Quby talks to OpenCPU using JSON. It means that OpenCPU API translates the JSON data sent to some kind of R data
structure (Vector, Array, DataFrame etc) in an R-function. This function then processes data and returns a result.
Probably some other type of data structure. This result is parsed by OpenCPU back into JSON and is sent back to Quby.

The following example shows how Quby issues an HMAC token from the `digest` R-package on OpenCPU server:

``` ruby
  score :hmac, label: 'HMAC' do
    result = opencpu 'digest', 'hmac', key: 'foo', object: 'bar'

    {value: result.first}
  end
```

Let's break down the code above:

``` ruby
  score :hmac, label: 'HMAC' do
    ...
  end
```

Here we define a new Quby `score` record with key `:hmac` and a human-friendly label 'HMAC'. The key is distinct and
will be used to find the Quby score in database.

``` ruby
  result = opencpu 'digest', 'hmac', key: 'foo', object: 'bar'
```

Here Quby sends a request along with data to R function **hmac** located in package **digest** on the OpenCPU server.
Along with request it sends a JSON string made of parameters given:

``` json
  {"key":"foo","object":"bar"}
```

On the OpenCPU server JSON will be translated into R function based on the URL with parameters based on JSON. According
to examples above, package (or library) that called **digest** will be loaded and used in order to execute function
called [hmac(key, object)](http://www.inside-r.org/packages/cran/digest/docs/hmac). This function will return an MD5
hash. OpenCPU will parse it back into JSON and return to Quby as following:

``` json
  ["0c7a250281315ab863549f66cd8a3a53"]
```

Quby will convert it back to a Ruby data structure and assign it to `result` variable. In this example a Ruby Array of
one String (which in this very case looks syntactically the same as JSON array):

``` ruby
  ["0c7a250281315ab863549f66cd8a3a53"]
```

Then, we return a Hash of the result that needs to be adjusted to assign the first String of returned Array to the value
of the score:

``` ruby
  {value: result.first}
```

As with many programming languages there are more than one way to reach the goal. This is why the Roqua team came up
with some [conventions](/developer/quby_v1/opencpu/conventions/) that should be followed in order to make the data exchange as smooth as possible.

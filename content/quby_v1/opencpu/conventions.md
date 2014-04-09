---
title: OpenCPU - Conventions
status: draft
---

## R function arguments

R accepts arguments in functions that start with a dot `.`, for example:

``` R
  # bad
  hmac <- function(.arg1, .arg2, ...) {
    statements
    return(object)
  }
```

While it's a correct way
in R to define variables and arguments, we prefer a variable that can be mapped to a JSON and a Ruby. Variables starting
with a dot will result in an error. Therefore the following function definition is better:

``` R
  # good, note the arguments!
  hmac <- function(arg1, arg2, ...) {
    statements
    return(object)
  }
```

## Returning objects

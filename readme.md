<h1 align=center>React Stopwatch Input</h1>

<p align=center>
  React Component for stopwatch times
</p>

<p align=center>  
  <a href="https://github.com/ThomasMcDonald/React-Stopwatch-Input"><img src="https://badgen.net/github/license/ThomasMcDonald/React-Stopwatch-Input"></a>
    
  [![Build](https://github.com/ThomasMcDonald/React-Stopwatch-Input/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ThomasMcDonald/React-Stopwatch-Input/actions/workflows/npm-publish.yml)

</p>


<h2>Installation</h2>

```bash
npm install react-stopwatch-input
```
or
```bash
yarn add react-stopwatch-input
```

``` import StopwatchInput from 'react-stopwatch-input' ```


<h2> Example </h2>
Here's an example of basic usage:

```JSX
import React, { useState } from 'react';
import StopwatchInput from 'react-stopwatch-input';

function Test() {
  const [value, setValue] = useState('10:00');
    return (
        <div>
            <StopwatchInput
                onChange={(newValue)=>setValue(value)}
                value={value}
            />
        </div>
    );
}
```

<h2></h2>
<div align=center>
  
  Made by [Thomas McDonald](https://github.com/ThomasMcDonald).
   
  <strong>NOTE:</strong> This package was created so I could learn how to create npm packages and use git actions. Use at own risk.
</div>


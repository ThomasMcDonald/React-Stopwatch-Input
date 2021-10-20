<h1 align=center>TimeSeries</h1>

<p align=center>
  React Component for stopwatch times
</p>

<p align=center>
  <a href="https://github.com/ThomasMcDonald/TimeSeries"><img src="https://badgen.net/github/license/ThomasMcDonald/TimeSeries"></a>
</p>

<h2>Installation</h2>
```bash npm install react-stopwatch-input```
or
```bash yarn add react-time-picker-input```

``` import StopwatchInput from 'react-stopwatch-input' ```



<h2> Development </h2>


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

<strong>NOTE:</strong> This package was created so i could learn how to create npm packages and use git actions. Use at own risk.
<h2></h2>
<div align=center>
  Made by [Thomas McDonald](https://github.com/ThomasMcDonald).
  
</div>


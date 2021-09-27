# 🖋️ useState() Hook

## 🧠 Points To Remember :
1. useState() always returns an array with a pair. The first element is our current state value and the second element is a function that allows us to update the current state value(first element).
2. The only argument to useState is the initial state value. It is equal to our current state value in the array.
3. The most common way of using useState() hook is as follows -   
- usually camelCase is used for naming.
- useState() hook is used inside a functional component.
- Refer general hooks properties [here]().
```

import React, {useState} from 'react'

const myComponent = ()=>{

    const [someValue, setSomeValue] = useState(initialStateValue)

}

```
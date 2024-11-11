# Hide Branding Tawk.to

A lightweight JavaScript solution to customize the appearance of Tawk.to chat widget by removing branding elements and improving the chat panel's usability.

## Features

- Removes Tawk.to branding elements
- Hides toolbar menu dropdown
- Removes right icon
- Improves chat panel scrolling
- Works with multiple chat iframes on the same page
- Automatically reapplies styles using an interval timer

## Usage

The script automatically runs when included in your page. It will:

1. Create necessary CSS rules to hide branding elements
2. Apply the styles to all chat iframes present on the page
3. Handle potential cross-origin iframe access issues safely
4. Continuously check and reapply styles using an interval

```javascript
// The function can be called manually if needed
removeBranding();

// The script automatically sets up an interval to reapply styles
const INTERVAL_MS = 100;
setInterval(removeBranding, INTERVAL_MS);
```

## How it Works

The script performs the following operations:

1. Defines CSS rules to hide specific Tawk.to elements
2. Creates a style element with the custom rules
3. Identifies all chat iframes on the page
4. Safely injects the styles into each iframe's document
5. Includes error handling for cross-origin restrictions
6. Sets up an interval to periodically reapply styles, ensuring they persist even if the chat widget refreshes

## Customization

You can modify the CSS rules in the `cssRules` constant to adjust which elements are hidden or styled:

```javascript
const cssRules = `
    a.tawk-branding { display: none !important }
    .tawk-dropdown.tawk-toolbar-menu { display: none !important }
    .tawk-icon-right { display: none !important }
    .tawk-main-panel .tawk-chat-panel { overflow-y: auto !important }
`;
```

You can also adjust the interval timing by modifying the `INTERVAL_MS` constant:

```javascript
const INTERVAL_MS = 100; // Time in milliseconds between style checks
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 calaespi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
# Dile Components V2

This is the "dile-components" catalog monorepo, a library of Custom Elements based on Lit and Web Components.

## Packages in This Repository

- `@dile/ui`: Components for creating common User Interfaces, such as buttons, dialogs, custom form elements, etc.
- `@dile/utils`: Components that provide useful functionalities for web development.
- `@dile/icons`: Templates for implementing SVG icons within your components.
- `@dile/editor`: A Markdown WYSIWYG (What You See Is What You Get) editor for the web.

To utilize this component library, follow these steps.

## Installation

First install the repository where the desired component is located. For instance, to use the UI custom elements, install `@dile/ui`:

```bash
npm install @dile/ui
```

## Component usage

To utilize a component from this library, you must import the element you need. For example, to use the toast feedback element, use the following import:

```javascript
import '@dile/ui/components/toast/toast';
```

After importing, you can use the component in your application like so:

```html
<dile-toast></dile-toast>
```

## Complete docs

You will find a complete list of the custom elements, along with their properties, methods, events, and examples on the [dile-components website](https://dile-components.polydile.com/):

<https://dile-components.polydile.com>

## Contribute

If you like to contribute publishing a component to this library, you will find a complete [guide to understand the components organization](https://dile-components.polydile.com/contribute/).

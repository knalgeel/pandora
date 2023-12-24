## Using the CodeInput Component

The `CodeInputComponent` is a standalone Angular component designed for inputting and handling character-by-character code input. This guide will help you understand how to implement and use this component in your Angular applications.

### Importing the Component

Since `PandoraCodeInput` is a standalone component, it can be imported directly into your module without needing to import an entire module. Add the component to your module's declarations.

```typescript
import { CodeInputComponent } from '@knalgeel/pandora';

@NgModule({
  declarations: [
    // ... other components
      CodeInputComponent
  ],
  // ...
})
export class YourModule { }
```

### Using the Component in Templates

Use the `pandora-code-input` selector to include this component in your Angular templates. Replace `yourCodeLength` with the appropriate variable in your component that determines the number of characters the user should input.

```html
<pandora-code-input [digits]="yourCodeLength"></pandora-code-input>
```

### Inputs

- `digits`: The number of individual character inputs to display.

### Outputs

- `filled`: This event is emitted when all character inputs are filled. It emits the combined string of all characters.

### Handling Events

Listen to the `filled` event to get the value when all input fields are filled. In your component, you can handle the emitted value accordingly.

```html
<pandora-code-input (filled)="onCodeFilled($event)"/>
```

In your component, you can handle the emitted value accordingly.

```typescript
onCodeFilled(code: string) {
  console.log('Code entered:', code);
}
```

### Styling

The component uses a SCSS file for styling. You can customize the styles by editing this file.

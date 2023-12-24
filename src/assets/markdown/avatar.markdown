## Using the PandoraAvatar Component

The `PandoraAvatar` component is an Angular component for displaying user avatars with flexible sizing. 

### Importing the Component

`PandoraAvatar` is a standalone component and can be imported directly into your module. Add the component to your
module's declarations.

```typescript
import { PandoraAvatarComponent } from 'path/to/avatar.component';

@NgModule({
    declarations: [
        // ... other components
        PandoraAvatarComponent
    ],
    // ...
})
export class YourModule {}
```

### Using the Component in Templates

To use `PandoraAvatar` in your templates, include the `pandora-avatar` selector. Assign the `src` attribute to the URL
of the user's avatar and the `size` attribute to the desired avatar size.

```html

<pandora-avatar [src]="userAvatarUrl" [size]="avatarSize"></pandora-avatar>
```

### Inputs

- `src`: The source URL of the avatar image.
- `size`: The size of the avatar, with several predefined size options ranging from `'xs'` to `'7xl'`. The default size
  is `'md'`.

import { Component } from '@angular/core';

@Component({
  selector: 'app-component-docs-switch',
  templateUrl: './component-docs-switch.component.html',
  styleUrl: './component-docs-switch.component.scss'
})
export class ComponentDocsSwitchComponent {

    state: 'component' | 'documentation' = 'component';

    setState(state: 'component' | 'documentation') {
        this.state = state;
    }

}

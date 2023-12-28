import { Component, Input } from '@angular/core';
import { User } from "../../../test/table-test/table-test.component";

@Component({
    selector: 'app-item',
    templateUrl: './search-select-option.component.html',
    styleUrls: ['./search-select-option.component.scss'],
})
export class SearchSelectOptionComponent {

    @Input()
    user: User;

}

import { Component, signal } from '@angular/core';
import { TableFieldRecord, ArrayPaginator } from "pandora";
import { TableActionsComponent } from "../../../../../projects/pandora/src/lib/components/table";
import { NotificationService } from "../../../../../projects/pandora/src/lib/services";


export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'app-table-test',
    templateUrl: './table-test.component.html',
    styleUrl: './table-test.component.scss'
})
export class TableTestComponent {

    fields: TableFieldRecord<User> = {
        name: {
            header: 'Name',
            column: (item) => item.name,
            order: 1,
        },
        email: {
            header: 'Email',
            column: (item) => item.email,
            order: 2,
        },
        phone: {
            header: {
                text: 'Phone',
            },
            column: {
                handle: (item) => item.phone,
            },
            order: 3,
        },
        actions: {
            header: '',
            column: (employee) => ({
                component: TableActionsComponent,
                inputs: {
                    actions: [
                        {
                            label: 'Edit',
                            icon: 'heroPencilSquare',
                            execute: () => console.log('Edit')
                        },
                        {
                            label: 'Delete',
                            icon: 'heroTrash',
                            execute: () => this.items.update(items => items.filter(item => item.id !== employee.id))
                        },
                    ]
                }
            }),
            order: 5,
        }
    }

    items = signal<User[]>([
        { id: '1', name: 'John', email: 'john@example.com', phone: '1234567890' },
        { id: '2', name: 'Jane', email: 'jane@example.com', phone: '2345678901' },
        { id: '3', name: 'Jack', email: 'jack@example.com', phone: '3456789012' },
        { id: '4', name: 'Emily', email: 'emily@example.com', phone: '4567890123' },
        { id: '5', name: 'Michael', email: 'michael@example.com', phone: '5678901234' },
        { id: '6', name: 'Sarah', email: 'sarah@example.com', phone: '6789012345' },
        { id: '7', name: 'Chris', email: 'chris@example.com', phone: '7890123456' },
        { id: '8', name: 'Lisa', email: 'lisa@example.com', phone: '8901234567' },
        { id: '9', name: 'David', email: 'david@example.com', phone: '9012345678' },
        { id: '10', name: 'Angela', email: 'angela@example.com', phone: '0123456789' },
        { id: '11', name: 'Tom', email: 'tom@example.com', phone: '1234509876' },
        { id: '12', name: 'Laura', email: 'laura@example.com', phone: '2345610987' },
        { id: '13', name: 'James', email: 'james@example.com', phone: '3456721098' },
        { id: '14', name: 'Jessica', email: 'jessica@example.com', phone: '4567832109' },
        { id: '15', name: 'Robert', email: 'robert@example.com', phone: '5678943210' },
        { id: '16', name: 'Olivia', email: 'olivia@example.com', phone: '6789054321' },
        { id: '17', name: 'Mark', email: 'mark@example.com', phone: '7890165432' },
        { id: '18', name: 'Sophia', email: 'sophia@example.com', phone: '8901276543' },
        { id: '19', name: 'William', email: 'william@example.com', phone: '9012387654' },
        { id: '20', name: 'Emma', email: 'emma@example.com', phone: '0123498765' },
        { id: '21', name: 'Daniel', email: 'daniel@example.com', phone: '1234560987' },
        { id: '22', name: 'Charlotte', email: 'charlotte@example.com', phone: '2345671098' },
        { id: '23', name: 'Kevin', email: 'kevin@example.com', phone: '3456782109' },
        { id: '24', name: 'Alice', email: 'alice@example.com', phone: '4567893210' },
        { id: '25', name: 'Brian', email: 'brian@example.com', phone: '5678904321' },
    ]);

    paginator = new ArrayPaginator(this.items);

    constructor(private readonly notificationService: NotificationService) { }

    ngOnInit() {
        this.notificationService.add({
            type: 'success',
            message: 'Welcome to Pandora!'
        });
    }

}

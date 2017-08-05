import { 
    EventEmitter,
    Component, 
    OnInit, 
    Input
} from '@angular/core';

import { UserService } from 'ng-aws-cognito';

@Component({
    selector: 'app-user-attribute',
    templateUrl: './user-attribute.component.html',
    styleUrls: ['./user-attribute.component.css']
})
export class UserAttributeComponent implements OnInit {

    @Input() attribute;
    //@Output() close: EventEmitter<any> = new EventEmitter();

    editable: boolean;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.setEditable(false);
    }

    setEditable(editable: boolean) {
        this.editable = editable;
    }

    save() {
    
    }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

    @Input() title = '';
    @Input('sub-title') subTitle = '';

    constructor() { }

    ngOnInit() {

    }

}

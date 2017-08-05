import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAttributeComponent } from './user-attribute.component';

describe('UserAttributeComponent', () => {
    let component: UserAttributeComponent;
    let fixture: ComponentFixture<UserAttributeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserAttributeComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAttributeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //it('should be created', () => {
        //expect(component).toBeTruthy();
    //});
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './list.component';

describe('SecondComponent', () => {
    let component: SecondComponent;
    let fixture: ComponentFixture<SecondComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SecondComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SecondComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithArrayComponent } from './with-array.component';

describe('WithArrayComponent', () => {
  let component: WithArrayComponent;
  let fixture: ComponentFixture<WithArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithCustomStoreComponent } from './with-custom-store.component';

describe('WithCustomStoreComponent', () => {
  let component: WithCustomStoreComponent;
  let fixture: ComponentFixture<WithCustomStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithCustomStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithCustomStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

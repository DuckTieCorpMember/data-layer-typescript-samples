import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithArrayStoreComponent } from './with-array-store.component';

describe('WithArrayStoreComponent', () => {
  let component: WithArrayStoreComponent;
  let fixture: ComponentFixture<WithArrayStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithArrayStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithArrayStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithAspNetComponent } from './with-asp-net.component';

describe('WithAspNetComponent', () => {
  let component: WithAspNetComponent;
  let fixture: ComponentFixture<WithAspNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithAspNetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithAspNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

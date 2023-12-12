import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOdataComponent } from './with-odata.component';

describe('WithOdataComponent', () => {
  let component: WithOdataComponent;
  let fixture: ComponentFixture<WithOdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithOdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithOdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

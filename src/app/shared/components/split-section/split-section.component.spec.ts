import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitSectionComponent } from './split-section.component';

describe('SplitSectionComponent', () => {
  let component: SplitSectionComponent;
  let fixture: ComponentFixture<SplitSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

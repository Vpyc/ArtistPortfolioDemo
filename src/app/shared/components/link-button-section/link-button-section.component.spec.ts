import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtonSectionComponent } from './link-button-section.component';

describe('LinkButtonSectionComponent', () => {
  let component: LinkButtonSectionComponent;
  let fixture: ComponentFixture<LinkButtonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButtonSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkButtonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

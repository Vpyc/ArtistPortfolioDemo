import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePreviewSectionComponent } from './home-preview-section.component';

describe('WorkSectionComponent', () => {
  let component: HomePreviewSectionComponent;
  let fixture: ComponentFixture<HomePreviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePreviewSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePreviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

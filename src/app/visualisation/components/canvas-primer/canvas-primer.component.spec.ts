import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPrimerComponent } from './canvas-primer.component';

describe('CanvasPrimerComponent', () => {
  let component: CanvasPrimerComponent;
  let fixture: ComponentFixture<CanvasPrimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasPrimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPrimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

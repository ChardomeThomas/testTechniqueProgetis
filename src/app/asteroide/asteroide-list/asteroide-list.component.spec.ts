import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroideListComponent } from './asteroide-list.component';

describe('AsteroideListComponent', () => {
  let component: AsteroideListComponent;
  let fixture: ComponentFixture<AsteroideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroideListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsteroideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

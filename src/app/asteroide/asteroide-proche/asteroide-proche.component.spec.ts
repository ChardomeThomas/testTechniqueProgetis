import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroideProcheComponent } from './asteroide-proche.component';

describe('AsteroideProcheComponent', () => {
  let component: AsteroideProcheComponent;
  let fixture: ComponentFixture<AsteroideProcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroideProcheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsteroideProcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

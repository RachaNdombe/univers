import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListeComponent } from './student-liste.component';

describe('StudentListeComponent', () => {
  let component: StudentListeComponent;
  let fixture: ComponentFixture<StudentListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

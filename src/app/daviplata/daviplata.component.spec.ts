import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaviplataComponent } from './daviplata.component';

describe('DaviplataComponent', () => {
  let component: DaviplataComponent;
  let fixture: ComponentFixture<DaviplataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaviplataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaviplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

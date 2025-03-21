import { TestBed } from '@angular/core/testing';
import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LocationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'demoapp' title`, () => {
    const fixture = TestBed.createComponent(LocationComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demoapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LocationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, locationComponent');
  });
});

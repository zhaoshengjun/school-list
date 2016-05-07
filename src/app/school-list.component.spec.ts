import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SchoolListAppComponent } from '../app/school-list.component';

beforeEachProviders(() => [SchoolListAppComponent]);

describe('App: SchoolList', () => {
  it('should create the app',
      inject([SchoolListAppComponent], (app: SchoolListAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'school-list works!\'',
      inject([SchoolListAppComponent], (app: SchoolListAppComponent) => {
    expect(app.title).toEqual('school-list works!');
  }));
});

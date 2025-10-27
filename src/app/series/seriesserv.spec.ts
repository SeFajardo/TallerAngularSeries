import { TestBed } from '@angular/core/testing';

import { Seriesserv } from './seriesserv';

describe('Seriesserv', () => {
  let service: Seriesserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seriesserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

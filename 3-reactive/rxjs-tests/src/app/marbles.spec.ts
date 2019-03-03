import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { concat, take, filter, delay } from 'rxjs/operators';
import { interval } from 'rxjs';

describe('TEST', () => {
    it('simple', () => {
        const source = 'x-x-x|';
        const expected = 'x-x-x|';
        expect(source).toBe(expected);
    });

    it('concat', () => {
        const one$ = cold('x-x|');
        const two$ = cold('-y|');
        expect(one$.pipe(concat(two$))).toBeObservable(cold('x-x-y|'));
    });

    it('concat++', () => {
        const one$ = cold('x-x|', { x: 'some value'});
        const two$ = cold('-y|', { y: 999});
        expect(one$.pipe(concat(two$))).toBeObservable(
          cold('a-a-b|', { a : 'some value', b: 999 })
        );
    });

    it('async', () => {
        const o = interval(10, getTestScheduler()).pipe(
          take(5),
          filter(v => v % 2 === 0)
        );
        getTestScheduler().flush();
        expect(o).toBeObservable(cold('-a-b-(c|)', { a: 0, b:2, c: 4}));
    });

    it('d', () => {
        const o = cold('a|', {a :1 }).pipe(delay(20, getTestScheduler()));
        expect(o).toBeObservable(cold('--a|', { a : 1 }));
    })

});

/*
  '-' - 10 frames of time 
  | - competion
  () - condition
  # - error
*/
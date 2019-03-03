import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

export class MyPreloading implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
       if(!route.data.mypreloading){
          return of(false);
       }
       return of(true).pipe(delay(3000), flatMap(_ => load()));
    };
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Event} from './event';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EventService {

    constructor() { }

    getData(): Observable<Event[]> {
        return of( [{ id: 1, resourceId: 'b', start: '2017-01-01T02:00:00', end: '2017-01-31T07:00:00', title: 'event 1', cost:0, description: 'una description', isNew: false},
                    { id: 2, resourceId: 'c', start: '2017-11-07T05:00:00', end: '2017-11-07T22:00:00', title: 'event 2' ,cost:0, description: '', isNew: false}]);
    }
}
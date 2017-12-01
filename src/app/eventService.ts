import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Event} from './event';
import { of } from 'rxjs/observable/of';


@Injectable()
export class EventService {

    constructor() { }

    getData(): Event[] {
        return ( [{ id: 1, resourceId: 'b', start: '2017-01-01T02:00:00', end: '2017-01-31T07:00:00', title: 'event 1', cost:0, description: 'una description', isNew: false},
                    { id: 2, resourceId: 'c', start: '2017-11-07T05:00:00', end: '2017-11-07T22:00:00', title: 'event 2' ,cost:0, description: '', isNew: false}]);
    }

    private getMockSchedulerOptions(events) {
          let schedulerOptions:any = {
            contentHeight: 'auto',
            defaultDate: '2017-01-01',
            editable: true,
            defaultView: 'weekly',
            events : events,
            header: {
                left:'',
				center: 'title',
				right: ''
			},
            weekNumbers: false,
            selectable: true,
            selectHelper:true,
            views: {
            weekly: {
                type: 'timeline',
                slotLabelFormat: 'MMM #W', // Mon 3 etc
                slotDuration: {weeks: 1}, // slots per day? 12:00 i.e. 12 hours AM/PM
                duration: { weeks: 53 },
                snapDuration: {weeks: 1}
            },
            visibleRange: {
                start: '2017-01-01',
                end: '2017-12-31'}
            },
            resourceAreaWidth: '15%',
            resourceLabelText: 'Media Types',
            resources: [
                { id: 'a', title: 'TV' },
                { id: 'b', title: 'CINEMA', eventColor: 'green' },
                { id: 'c', title: 'DIGITAL', eventColor: 'orange' },
                { id: 'd', title: 'OOH', children: [
                    { id: 'd1', title: 'OOH Sub 1' },
                    { id: 'd2', title: 'OOH Sub 2' }
                ] },
                { id: 'e', title: 'RADIO' },
                { id: 'f', title: 'PRINT', eventColor: 'red' },
                
            ],
        };

        return schedulerOptions;
    }

    getSchedulerConfig(): Observable<any> {
       return of(this.getMockSchedulerOptions(this.getData()));
    }
}
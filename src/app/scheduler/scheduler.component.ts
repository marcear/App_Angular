import { Component, NgModule, OnInit, AfterViewInit } from "@angular/core";
import "fullcalendar-scheduler/dist/scheduler"
import * as $ from 'jquery';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {DialogExampleComponent} from '../dialog-example/dialog-example.component';
import {Event} from '../event';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {EventService} from '../eventService';
import {CommonHelper} from '../commonHelper';

@Component({
    selector: "scheduler",
    styleUrls: ['scheduler.component.css'],
    templateUrl: 'scheduler.component.html'
})

export class SchedulerComponent implements AfterViewInit {
    
    constructor(public dialog: MatDialog, private eventService: EventService) {
    }
    
    // properties
    selectedEvent: Event;
    events: Event[];
    errorMessage: string;
    
    private updateEvents(events: Event[]) {
        this.events = events;
        this.calendarOptions.events = events;
        $('#calendar').fullCalendar('removeEvents');
        $('#calendar').fullCalendar('addEventSource', events);
        $('#calendar').fullCalendar('rerenderEvents');
    }

    private findEvent(id, eventList) {
        for (let event of eventList) {
            if(event.id == id) {
                return event;
            }
        }    

        return null;
    }

    private getEvents() {
        this.eventService.getData()
        .subscribe(
        calendarEvents => {
            console.log('API data ready', calendarEvents);
            this.updateEvents(calendarEvents);
        },
        error => this.errorMessage = <any>error);
    }

    // methods
    openDialog(event) {
        let dialogRef = this.dialog.open(DialogExampleComponent, { data: event });
        dialogRef.afterClosed().subscribe(result => {
            // Obj passed as reference
            let foundEvent = this.findEvent(result.id, this.events);
            if(foundEvent != null) {
                foundEvent.title = "Cost: " + result.cost + " | Aditional Info: " + result.description;
                foundEvent.cost = result.cost;
                foundEvent.description = result.description;
            }

            this.updateEvents(this.events);
        });
    }

     private calendarOptions:any = {
        //height: 'auto',
        contentHeight: 'auto',
        defaultDate: '2017-01-01',
        editable: true,
        defaultView: 'weekly',
        header: {
                left:'',
				center: 'title',
				right: ''
			},
        weekNumbers: false,
        //scrollTime: '00:00',
        selectable: true,
        selectHelper:true,
        events: [],
           //When u select some space in the calendar do the following:
        select: ( start, end, event, view, resource ) => {
            let newEvent = new Event(start, end, resource.id);      
            this.events.push(newEvent);
            this.updateEvents(this.events);
        },
        eventDrop: (event, delta, revertFunc) => {
            // Obj passed as reference
            let foundEvent = this.findEvent(event.id, this.events);
            foundEvent.start = event.start;
            foundEvent.end = event.end;
            foundEvent.resourceId = event.resourceId;
            this.updateEvents(this.events);
        },
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
        eventClick: (calEvent, jsEvent, view) => {
            this.selectedEvent = calEvent;
            this.openDialog(this.selectedEvent);
        }
    }


ngAfterViewInit() {
    this.getEvents();
  }
}



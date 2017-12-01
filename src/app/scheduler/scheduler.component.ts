import { Component, NgModule, OnInit, AfterViewInit } from "@angular/core";
import "fullcalendar-scheduler/dist/scheduler"
import * as $ from 'jquery';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {EventFormComponent} from '../event-form/event-form.component';
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
    // properties
    private selectedEvent: Event;
    private events: Event[];
    private errorMessage: string;
    private schedulerOptions:any;
    
    ngAfterViewInit() {
        this.events = this.schedulerOptions.events;
    }

    constructor(public eventDialog: MatDialog, private eventService: EventService) {
        this.eventService.getSchedulerConfig()
        .subscribe(
            config => {
                this.schedulerOptions = config;
                this.schedulerOptions.select = this.onEventSelect.bind(this);
                this.schedulerOptions.eventDrop = this.onEventDrop.bind(this);
                this.schedulerOptions.eventClick = this.onEventClick.bind(this);
            },
            error => this.errorMessage = <any>error
            );
    }
    
    private updateEvents(events: Event[]) {
        this.events = events;
        this.schedulerOptions.events = events;
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
  

    private openEventEditor(event) {
        let eventDialogRef = this.eventDialog.open(EventFormComponent, { data: event });
        eventDialogRef.afterClosed().subscribe(result => {
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

    // When u select some space in the calendar do the following:
    onEventSelect( start, end, event, view, resource ){
        let newEvent = new Event(start, end, resource.id);      
        this.events.push(newEvent);
        this.updateEvents(this.events);
    }

    onEventDrop(event, delta, revertFunc){
        // Obj passed as reference
        let foundEvent = this.findEvent(event.id, this.events);
        foundEvent.start = event.start;
        foundEvent.end = event.end;
        foundEvent.resourceId = event.resourceId;
        this.updateEvents(this.events);
    }
     
    onEventClick(calEvent, jsEvent, view) {
        this.selectedEvent = calEvent;
        this.openEventEditor(this.selectedEvent);
    }
    
}



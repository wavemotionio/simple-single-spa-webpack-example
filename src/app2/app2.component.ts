import {Component, OnInit} from '@angular/core';
import { eventManager } from 'dom-pub-sub-path-router';

@Component({
  selector: 'app2',
  template: `
    <div style="margin-top: 100px;">
      This was rendered by App2 which is written in Angular
    </div>
    <a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a>
    <a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>
    <button (click)="open($event)">open assessment from this worklist</button>
    <router-outlet></router-outlet>
  `,
})

export class App2 implements OnInit {
    assessmentId: any = 5000;

   	ngOnInit() {
   		  // document.addEventListener('createAWorklist', this.callOnEvent);
   	}

   	// ngOnDestroy() {
   	// 	document.removeEventListener('createAWorklist', this.callOnEvent);
   	// }

   	open = () => {
        eventManager.events.assessment.open.publish({ assessmentId: this.assessmentId });
   	}
}

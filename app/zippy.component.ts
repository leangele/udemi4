import { Component, Input } from '@angular/core';
@Component({
  selector: "zippy",
  template: `
     <div class="col-md-3 col-md-offset-2 panel panel-default ">
      <div class="panel-heading right"   (click)="isShowed=!isShowed">
        <ng-content select=".heading">
</ng-content>
        <i class="glyphicon pull-right pull-center"  
        [ngClass]="{
        'glyphicon-chevron-down':!isShowed,
        'glyphicon-chevron-up':isShowed}"
      ></i>        
      </div>
      <div class="panel-body" *ngIf="isShowed">
        <ng-content select=".body">
        </ng-content>
      </div>
    </div>
    `,
  styles: [`.right{
cursor:pointer}`],


})
export class ZippyComponent {
  isShowed: false
}
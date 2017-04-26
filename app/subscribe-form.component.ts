import { Component } from '@angular/core';
@Component({
    selector: "subscribe",
    templateUrl: "app/subscribe.component.html"
})
export class SubscribeComponent {
    frequencies = [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }];
    onSuscribe(form) {
        console.log(form.value);
    }
}
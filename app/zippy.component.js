"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ZippyComponent = (function () {
    function ZippyComponent() {
    }
    return ZippyComponent;
}());
ZippyComponent = __decorate([
    core_1.Component({
        selector: "zippy",
        template: "\n     <div class=\"col-md-3 col-md-offset-2 panel panel-default \">\n      <div class=\"panel-heading right\"   (click)=\"isShowed=!isShowed\">\n        <ng-content select=\".heading\">\n</ng-content>\n        <i class=\"glyphicon pull-right pull-center\"  \n        [ngClass]=\"{\n        'glyphicon-chevron-down':!isShowed,\n        'glyphicon-chevron-up':isShowed}\"\n      ></i>        \n      </div>\n      <div class=\"panel-body\" *ngIf=\"isShowed\">\n        <ng-content select=\".body\">\n        </ng-content>\n      </div>\n    </div>\n    ",
        styles: [".right{\ncursor:pointer}"],
    })
], ZippyComponent);
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map
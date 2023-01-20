import { Component } from '@angular/core';
import { WritingService } from '../writing.service';

@Component({
    selector: 'app-input-area',
    templateUrl: './input-area.component.html',
    styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent {

    public inputText = '';

    constructor(public writingSrv: WritingService) { }

    public addInput(inputText: string): void {
        this.writingSrv.addItem(inputText);
        setTimeout(() => this.inputText = '', 200);
    }

}

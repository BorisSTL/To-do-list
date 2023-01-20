import { Component } from '@angular/core';
import { WritingService } from '../writing.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    constructor(public writingSrv: WritingService) { }

    public clear(): void {
        this.writingSrv.clearAllList();
    }

    public remove(itemCheckList: string): void {
        this.writingSrv.deleteItem(itemCheckList);
    }

}

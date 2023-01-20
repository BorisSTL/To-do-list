import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WritingService {

    public checkList: string[] = [];

    constructor() { }

    public addItem(inputText: string): void {
        this.checkList.push(inputText);
    }

    public deleteItem(itemCheckList: string): void {
        let index: number = this.checkList.indexOf(itemCheckList);
        this.checkList.splice(index, 1);
    }

    public clearAllList(): void {
        this.checkList.splice(0, this.checkList.length);
    }

}

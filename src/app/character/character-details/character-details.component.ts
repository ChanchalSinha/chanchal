import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  paraStyle: String = 'block';
  buttonClickedArray = [];
  count: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(): void {
    this.paraStyle = this.paraStyle === 'block' ? 'none' : 'block';
    this.buttonClickedArray.push(this.count++);
  }

  getBgColor(): String {
    return this.buttonClickedArray.length > 5 ? 'blue' : 'black';
  }

}

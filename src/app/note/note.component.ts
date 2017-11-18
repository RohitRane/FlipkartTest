import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import { Note } from '../note';

import {NotesService} from '../notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  @Input() searchStr:string;
  @Output() stayOpen = new EventEmitter();
  constructor(public noteSrvc : NotesService) { }

  ngOnInit() {
  }

  createChildNote() {
    var noteTxt = prompt("Please enter your name", '');

    /*if (noteTxt == null || noteTxt == "") {
      } else {
        console.log("Child note text", noteTxt);
      }
    */
    console.log("Child note text", noteTxt);
    let newNote: Note = {
      text: noteTxt,
      children: [],
      show: true,
      nid: ''
    }
    debugger;
    this.noteSrvc.addNote(newNote,this.note.nid);
    
  }

  showNode(){
    let match = this.noteSrvc.findText(this.note,this.searchStr);
    if(match){
      return true;
    } 
    else{
      return false;
    } 
  }
}

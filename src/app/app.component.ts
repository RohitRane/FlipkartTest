import { Component } from '@angular/core';
import { Note } from './note';

import {NotesService} from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noteText;

  constructor(public notesSrvc : NotesService){
    
  }

  createNote(){
    let newNote:Note = {
      text :this.noteText,
      show :true,
      children:[],
      nid:''
    }

    console.log("New Note", newNote);
    this.notesSrvc.addNote(newNote);
  }
}

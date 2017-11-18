import { Injectable } from '@angular/core';

import { Note } from './note';

@Injectable()
export class NotesService {
  notes: Array<Note> = [];
  noteIds: Array<string> = [];
  constructor() {
    console.log("Initializing Notes Service.");
  }

  addNote(note: Note, parentNodeId: string = '') {
    note.nid = Date.now().toString();
    this.noteIds.push(note.nid);
    if (!parentNodeId) {
      //note.nid = (Math.ceil( Math.random())* Math.ceil(Math.log10(this.noteIds.length+1))).toString();

      this.notes.push(note);
    } else {
      //this.compareChildren(this.notes, parentNodeId, note);
      this.notes.forEach(_note => {
        let pNode = this.find(_note, parentNodeId);
        if (pNode){
          
           pNode.children.push(note);
        }
         
      });
    }

    console.log("Notes", this.notes);
  }

  compareChildren(notes, pid, note) {
    notes.forEach((note) => {
      if (note.nid === pid) {
        console.log("Hurray");
        note.children.push(note);
      } else if (note.children.length > 0) {
        this.compareChildren(note.children, pid, note);
      }

    });
  }

  find(node, pid) {
    if (node.nid === pid) return node;
    for (var i = 0; i < node.children.length; i++) {
      var result = this.find(node.children[i], pid);
      if (result) return result;
    }
    return null;
  }

  findText(node, text){
    
    if (node.text.includes(text)) return node;
    for (var i = 0; i < node.children.length; i++) {
      var result = this.findText(node.children[i], text);
      if (result) return result;
    }
    return null;
  }

}

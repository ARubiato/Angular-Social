import { Component, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note-model';
import { Time } from '@angular/common';
import { timestamp } from 'rxjs/operators';


@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent {

  @Input()
  note: Note;

  constructor(private noteService: NoteService) { }

  addHeartToNote(val: number) {
    if (this.note.id) {
      const date = new Date().getTime();
      this.noteService.updateNote(this.note.id, { hearts: val + 1 });
    } else {
      console.error('Note missing ID!');
    }
  }

  addDislikeToNote(val: number) {
    if (this.note.id) {
      this.noteService.updateNote(this.note.id, { dislike: val + 1 });
    } else {
      console.error('Note missing ID!');
    }
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id);
  }

  timeNote(time: Time) {
    this.noteService.timeNote(time);
  }



}

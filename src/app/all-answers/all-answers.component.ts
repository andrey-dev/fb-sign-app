import { Component, OnInit } from '@angular/core';
import { StorageService, Answer } from '../services/storage.service';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { AllAnswersPopupComponent } from './all-answers-popup/all-answers-popup.component';

@Component({
  selector: 'app-all-answers',
  templateUrl: './all-answers.component.html',
  styleUrls: ['./all-answers.component.scss']
})
export class AllAnswersComponent implements OnInit {
  public answers: Answer[];
  public dataSource: MatTableDataSource<Answer>;
  public displayedColumns: string[] = [
    'photoUrl',
    'name',
    'status',
    'companions'
  ];
  public currentName: string;

  constructor(private storage: StorageService, public dialog: MatDialog) {}

  ngOnInit() {
    this.answers = this.storage.getAllAnswers();
    this.dataSource = new MatTableDataSource(this.answers);
    this.currentName = this.storage.getAnswer().name;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getStatusClass(element: Answer): string {
    return element.status === '0' ? 'fa fa-times' : 'fa fa-check';
  }

  onClick(row: Answer) {
    if (row.name !== this.currentName) {
      return;
    }
    // Show popup
    const dialogRef = this.dialog.open(AllAnswersPopupComponent, {
      width: '300px',
      data: { name: this.currentName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.storage.removeAnswer();
      this.dataSource.data = this.answers.filter((answer: Answer) => {
        return answer.name !== this.currentName;
      });
    });
  }
}

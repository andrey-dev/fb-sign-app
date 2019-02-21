import { Component, OnInit } from '@angular/core';
import { StorageService, Answer } from '../services/storage.service';
import { MatTableDataSource } from '@angular/material';

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

  constructor(private storage: StorageService) {}

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
    // popup
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users: any[] = [];
  headers: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
      .subscribe(data => {
        this.users = data;
        if (data.length) {
          this.headers = Object.keys(data[0]);
        }
      });
  }

  goToDetails(user: any): void {
    this.router.navigate(['/user', user.id]);
  }

}

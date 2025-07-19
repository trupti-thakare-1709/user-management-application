import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  user: any;
  userKeys: string[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

   ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
      .subscribe(data => {
        this.user = data.find(u => String(u.id) === userId);
        if (this.user) {
          this.userKeys = Object.keys(this.user);
        }
      });
  }

  backButton(): void {
    this.router.navigate(['/']);
  }
}

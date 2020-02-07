import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dans-cafe';

  constructor(private route: ActivatedRoute, private router: Router) {}

  navigateTo(location: string): void {
    this.router.navigate([location], { relativeTo: this.route});
  }
}

import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: KeycloakService) { }

  ngOnInit(): void {
  }

  navigateTo(location: string): void {
    this.router.navigate([location], { relativeTo: this.route});
  }

  logout(): void {
    this.service.logout();
  }
}

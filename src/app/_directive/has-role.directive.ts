import { Directive, OnDestroy, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {

  @Input()
  appHasRole: string;
  isVisible = false;

  constructor(private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private keycloakService: KeycloakService) { }

  ngOnInit() {

    const roles = this.keycloakService.getUserRoles();
    if (roles.includes(this.appHasRole)) {
      if (!this.isVisible) {
        // We update the `isVisible` property and add the
        // templateRef to the view using the
        // 'createEmbeddedView' method of the viewContainerRef
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.isVisible = false;
        this.viewContainerRef.clear();
      }
    }
  }

  ngOnDestroy() {

  }
}

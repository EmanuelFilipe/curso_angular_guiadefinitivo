import { ActivatedRouteSnapshot, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { DashboardComponent } from "../component/dashboard/dashboard.component";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const logoutGuard = (): CanDeactivateFn<DashboardComponent> => {
    return (component: DashboardComponent, 
            currentRoute: ActivatedRouteSnapshot, 
            currentState: RouterStateSnapshot,
            nextState: RouterStateSnapshot): MaybeAsync<GuardResult> => {
                console.log('currentRoute', currentRoute)
                console.log('currentState', currentState)
                console.log('nextState', nextState)

                if(nextState.url === '/login') {
                    const authService = inject(AuthService)
                    const confirmation = confirm('deseja realmente sair?')

                    if (confirmation) {
                        authService.logout()
                        return true
                    } else
                        return false
                }

                return true
            }
}
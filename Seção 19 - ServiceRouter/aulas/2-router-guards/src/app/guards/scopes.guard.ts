import { CanActivateFn, GuardResult, MaybeAsync, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const scopesGuard = (scope: string): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        const authService = inject(AuthService)
        const router = inject(Router)

        const userScopes = authService.getUserScopes()

        if (userScopes.find((userScope) => userScope === scope)) {
            console.log('scopesGuard:success')
            return true
        }
        else {
            console.log('scopesGuard:not-authorized')
            return router.navigate(['not-authorized'])
        }
    }
}
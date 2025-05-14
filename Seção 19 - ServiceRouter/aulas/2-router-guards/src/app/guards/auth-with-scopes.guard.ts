import { CanActivateFn, GuardResult, MaybeAsync, Router } from "@angular/router"
import { AuthService } from "../services/auth.service"
import { inject } from "@angular/core"
import { catchError, map } from "rxjs"

/**
 * Verifica o token primeiro para depois testar o scope
 * @param scope 
 * @returns 
 */
export const authWithScopesGuard = (scope: string): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        console.log('authWithScopesGuard')
        const authService = inject(AuthService)
        const router = inject(Router)

        return authService.verifyToken().pipe(
            //caso erro
            catchError(() => {
                return router.navigate(['login'])
            }),
            // sucesso
            map(() => {
                const HAS_ROUTE_SCOPE = authService.getUserScopes()
                if (HAS_ROUTE_SCOPE.find((userScope) => userScope === scope)) {
                    console.log('authWithScopesGuard:success')
                    return true
                } else {
                    console.log('authWithScopesGuard:not-authorized')
                    router.navigate(['not-authorized'])
                    return false
                }
            })
        )
    }
}
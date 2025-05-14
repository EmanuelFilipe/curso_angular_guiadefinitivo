import { inject } from "@angular/core";
import { CanActivateFn, GuardResult, MaybeAsync, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { catchError, map } from "rxjs";

export const AuthGuard = (): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        console.log('AuthGuard')
        const authService = inject(AuthService)
        const router = inject(Router)

        return authService.verifyToken().pipe(
            catchError(() => {
                console.log('AuthGuard:error')
                return router.navigate(['login'])
            }),
            map(() => {
                console.log('AuthGuard:success')
                return true;
            })
        )
    }
}
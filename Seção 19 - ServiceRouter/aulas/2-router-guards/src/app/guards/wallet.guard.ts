import { CanActivateFn, GuardResult, MaybeAsync } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const WalletGuard = (): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    console.log('WalletGuard');
    const authService = inject(AuthService);
    const WALLET_ACTIVE = authService.getWalletStatus() === 'active'

    if (WALLET_ACTIVE) return true
    else return false
  };
};

import { TYPES } from "@/inversify/types";
import { AuthService } from "@/services/auth_service";
import { inject, injectable } from "inversify";

@injectable()
export class AuthRepository {
  #authService: AuthService;

  constructor(@inject(TYPES.AuthService) authService: AuthService) {
    this.#authService = authService
  }

  async login() {
    this.#authService.login();
  }

  async register() {
    this.#authService.register();
  }
}
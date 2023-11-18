import { Injectable } from "@angular/core";
import { AppUser } from "../models/appuser.modal";

@Injectable()
export class StorageService {

    private KEY_NAME = 'user';

    saveUserInfoInSession(userInfo: AppUser) {
        if (!userInfo || !userInfo.uid) {
            throw new Error("Invalid/Missing User UID in response");
        }
        localStorage.setItem(this.KEY_NAME, JSON.stringify(userInfo));
    }

    getUserInfoFromSession(): AppUser {
        const user = localStorage.getItem(this.KEY_NAME);
        if (user === null) {
            throw new Error("Missing User Info in Storage. User may not be authenticated.");
        }
        return JSON.parse(user);
    }

    getDisplayNameFromSession(): string | null {
        const user = localStorage.getItem(this.KEY_NAME);
        if (user === null) {
            throw new Error("Missing User Info in Storage. User may not be authenticated.");
        }
        const parsedUser: AppUser = JSON.parse(user);
        return parsedUser.displayName;
    }

    getEmailFromSession(): string | null {
        const user = localStorage.getItem(this.KEY_NAME);
        if (user === null) {
            throw new Error("Missing User Info in Storage. User may not be authenticated.");
        }
        const parsedUser: AppUser = JSON.parse(user);
        return parsedUser.email;
    }

    /**
     * Method to get user avatar url
     * @returns Link refering to User Avatar image
     */
    getUserAvatarFromSession(): string | null {
        const user = localStorage.getItem(this.KEY_NAME);
        if (user === null) {
            throw new Error("Missing User Info in Storage. User may not be authenticated.");
        }
        const parsedUser: AppUser = JSON.parse(user);
        return parsedUser.photoURL;
    }

    clearUserSession() {
        localStorage.removeItem(this.KEY_NAME);
    }

    isUserLoggedIn(): boolean {
        const user = localStorage.getItem(this.KEY_NAME);
        if (user === null) {
            return false;
        }
        const parsedUser: AppUser = JSON.parse(user);
        return parsedUser != null && this.isUserObjValid(parsedUser);
    }

    private isUserObjValid(user: AppUser): boolean {
        if (user == null)
            return false;
        else if (user.uid == null || user.uid.trim().length == 0)
            return false;
        else
            return true;
    }
}
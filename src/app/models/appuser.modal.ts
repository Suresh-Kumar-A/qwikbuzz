export interface AppUser {
    /**
     * The user's unique ID, scoped to the project.
     */
    uid: string;
    /**
     * The display name of the user.
     */
    displayName: string | null;
    /**
     * The email of the user.
     */
    email: string | null;
    /**
     * The phone number normalized based on the E.164 standard (e.g. +16505550101) for the
     * user.
     *
     * @remarks
     * This is null if the user has no phone credential linked to the account.
     */
    phoneNumber: string | null;
    /**
     * The profile photo URL of the user.
     */
    photoURL: string | null;
    /**
     * The provider used to authenticate the user.
     */
    providerId: string;
    /**
     * Whether the email has been verified with {@link sendEmailVerification} and
     * {@link applyActionCode}.
     */
    emailVerified: boolean;
    /**
     * Whether the user is authenticated using the {@link ProviderId}.ANONYMOUS provider.
     */
    isAnonymous: boolean;
}
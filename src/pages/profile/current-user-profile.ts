import { SingleContextUpKey, SingleContextUpRef } from '@proc7ts/context-values/updatable';
import { AfterEvent, mapAfter_, trackValueBy, ValueTracker } from '@proc7ts/fun-events';
import { UserProfile } from '../../core/users';

export interface UpdatableUserProfile extends UserProfile {

  update(profile: UserProfile): void;

}
export interface NoUserProfile {
  readonly username?: undefined;
}

export type CurrentUserProfile =
    | UpdatableUserProfile
    | NoUserProfile;

export const noUserProfile: NoUserProfile = {};

export const CurrentUserProfile: SingleContextUpRef<CurrentUserProfile> = (
    /*#__PURE__*/ new SingleContextUpKey<CurrentUserProfile>(
        'current-user-profile',
        {
          byDefault: () => noUserProfile,
        },
    )
);

export function currentUserProfileBy(
    source: AfterEvent<[UserProfile | NoUserProfile]>,
): ValueTracker<CurrentUserProfile> {

  const currentProfile = trackValueBy<CurrentUserProfile>(
      source.do(
          mapAfter_(profile => {
            if (profile.username == null) {
              return profile;
            }

            const update = (updated: UserProfile): void => {
              currentProfile.it = {
                ...updated,
                update,
              };
            };

            return {
              ...profile,
              update,
            };
          }),
      ),
  );

  return currentProfile;
}

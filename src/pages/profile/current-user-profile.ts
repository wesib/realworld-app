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

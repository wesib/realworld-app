import { SingleContextUpKey, SingleContextUpRef } from 'context-values/updatable';
import { afterSupplied, EventKeeper, trackValueBy, ValueTracker } from 'fun-events';
import { UserProfile } from '../../common/users';

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
    source: EventKeeper<[UserProfile | NoUserProfile]>,
): ValueTracker<CurrentUserProfile> {

  const currentProfile = trackValueBy<CurrentUserProfile>(
      afterSupplied(source).keep.thru_(
          profile => {
            if (profile.username == null) {
              return profile;
            }

            const update = (profile: UserProfile): void => {
              currentProfile.it = {
                ...profile,
                update,
              };
            };

            return {
              ...profile,
              update,
            };
          },
      ),
  );

  return currentProfile;
}

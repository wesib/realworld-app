import { SingleContextUpKey, SingleContextUpRef } from 'context-values/updatable';
import { UserProfile } from '../../common/users';

export type CurrentUserProfile = UserProfile | { readonly username?: undefined };

export const noUserProfile: CurrentUserProfile = {};

export const CurrentUserProfile: SingleContextUpRef<CurrentUserProfile> = (
    /*#__PURE__*/ new SingleContextUpKey<CurrentUserProfile>(
        'current-user-profile',
        {
          byDefault: () => (noUserProfile),
        },
    )
);

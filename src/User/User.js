import React from 'react';
import { componentFromStream } from 'recompose';
import { ajax } from 'rxjs/ajax';
import { debounceTime, filter, map, pluck, switchMap } from 'rxjs/operators';

import UserCard from './UserCard';
import './User.css';

const formatUrl = user => `https://api.github.com/users/${user}`;

const User = componentFromStream(prop$ => {
    const getUsers$ = prop$.pipe( 
        debounceTime(1000),
        pluck("user"),
        filter(user => user && user.length),
        map(formatUrl),
        switchMap(url => ajax(url).pipe(
            pluck('response'),
            map(UserCard)
        )),
    );
    return getUsers$;
});

export default User;

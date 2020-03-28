import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import SignUp from '../components/SignUp';

const SignUpContainer = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    function onChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function onSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.name && user.email && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <SignUp
            user={user}
            submitted={submitted}
            registering={registering}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default SignUpContainer;

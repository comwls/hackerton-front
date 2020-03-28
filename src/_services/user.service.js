import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
};

function login(email, password) {
    return fetch(process.env.REACT_APP_API_URL + `/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    })
        .then(handleResponse)
        .then(({ user, token }) => {
            user.token = token;
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function getAll() {
    return fetch(process.env.REACT_APP_API_URL + `/users`, {
        method: 'GET',
        headers: authHeader(),
    }).then(handleResponse);
}

function getById(id) {
    return fetch(process.env.REACT_APP_API_URL + `/users/${id}`, {
        method: 'GET',
        headers: authHeader(),
    }).then(handleResponse);
}

function register(user) {
    return fetch(process.env.REACT_APP_API_URL + `/auth/sign-up`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }).then(handleResponse);
}

function update(user) {
    return fetch(process.env.REACT_APP_API_URL + `/users/${user.id}`, {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }).then(handleResponse);
}

function _delete(id) {
    return fetch(process.env.REACT_APP_API_URL + `/users/${id}`, {
        method: 'DELETE',
        headers: authHeader(),
    }).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

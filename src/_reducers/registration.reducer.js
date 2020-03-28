import { userConstants } from '../_constants';

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { registering: true };
        case userConstants.REGISTER_SUCCESS:
            alert('회원가입이 완료되었습니다.');
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
}

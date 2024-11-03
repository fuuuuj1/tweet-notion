import type { PreSignUpTriggerHandler} from 'aws-lambda';
import { env } from '$amplify/env/pre-sign-up';

export const handler: PreSignUpTriggerHandler = async (event) => {
    const email = event.request.userAttributes['email'];

    if (email !== env.ALLOWED_EMAIL) {
        // 指定したアドレス以外は登録できない
        // 入力されたアドレスを出力しつつエラーを投げる
        throw new Error(`Invalid email address: ${email}`);
    }

    return event;
};
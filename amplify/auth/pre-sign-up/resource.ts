import { defineFunction, secret } from "@aws-amplify/backend";

export const preSignUp = defineFunction({
    name: "pre-sign-up",
    // 指定したアドレスのみ登録可能
    environment: {
        ALLOWED_EMAIL: secret("ALLOWED_EMAIL"),
    }
});
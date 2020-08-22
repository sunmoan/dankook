

<template>
    <section>
        <navigation></navigation>
        <h1 style="margin-bottom:10px">QR 출입인증 시스템</h1>
        <img v-on:click="mainimgclick" src="../assets/load.gif" width="350px">
        <h2 style="margin-bottom:10px">처리중입니다</h2>
    </section>
</template>

<script>

 import "../assets/firebase-ui-auth__ko"
 import * as firebase from "firebase"
import "firebaseui/dist/firebaseui.css";

export default {
    name: "Login",
    data() {
        return {};
    },
    components: {

    },
    mounted() {
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }

        var uiConfig = {
            signInSuccessUrl: "/#/checkpoint", // This redirect can be achived by route using callback.
            signInFlow: "popup",

            signInOptions: [
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    recaptchaParameters: {
                        type: 'image', // 'audio'
                        size: 'invisible', // 'invisible' or 'compact'
                        badge: 'inline' //' bottomright' or 'inline' applies to invisible.
                    },
                    defaultCountry: 'KR', // Set default country to the United Kingdom (+44).
                    // For prefilling the national number, set defaultNationNumber.
                    // This will only be observed if only phone Auth provider is used since
                    // for multiple providers, the NASCAR screen will always render first
                    // with a 'sign in with phone number' button.
                    defaultNationalNumber: '01011111111',
                    // You can also pass the full phone number string instead of the
                    // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
                    // the first country ID that matches the country code will be used to
                    // populate the country selector. So for countries that share the same
                    // country code, the selected country may not be the expected one.
                    // In that case, pass the 'defaultCountry' instead to ensure the exact
                    // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
                    // will always have higher priority than 'loginHint' which will be ignored
                    // in their favor. In this case, the default country will be 'GB' even
                    // though 'loginHint' specified the country code as '+1'.
                    loginHint: '+820101111111'
                    }
            ],

        };
        ui.start("#firebaseui-auth-container", uiConfig);
    }
};
</script>

<style>
</style>

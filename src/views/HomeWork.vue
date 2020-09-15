<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>

            <div class="container">

                <!--modal with login-->
                <button class="btn btnPrimary" @click="modalLogin = !modalLogin">Show modal with form + validate + login</button>
                <modalLogin
                        v-show="modalLogin"
                        @close="modalLogin = false; modalRegistration = $event"
                ></modalLogin>

                <!--modal with registration-->
                <button class="btn btnPrimary" @click="modalRegistration = !modalRegistration">Show modal with form + validate + registration</button>
                <modalRegistration
                        v-show="modalRegistration"
                        @close="modalRegistration = false; modalLogin = $event"
                ></modalRegistration>

            </div>
        </section>
    </div>
</template>

<script>
    import modals from '@/components/UI/Modal.vue'
    import modalLogin from '@/components/ModalLogin.vue'
    import modalRegistration from '@/components/ModalRegistration'

    export default {
        name: "HomeWork",

        components: { modals, modalLogin, modalRegistration },

        data() {
            return {

                modalLogin: false,

                modalRegistration: false,
            }
        }
    }
</script>

<style scoped>

</style>
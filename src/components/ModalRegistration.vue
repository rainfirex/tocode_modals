<template>
    <modal
            :title="'Registration'"
            @close="hideModal">
        <div slot="body">
            <form @submit.prevent="submit">

                <div class="form-item" :class="{errorInput: $v.email.$error}">
                    <label>Email:</label>
                    <p class="errorText" v-if="!$v.email.required">Filed is required</p>
                    <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
                    <input
                            v-model="email"
                            :class="{error: $v.email.$error}"
                            @change="$v.email.$touch()"
                    >
                </div>

                <div class="form-item" :class="{errorInput: $v.password.$error}">
                    <label>Password:</label>
                    <p class="errorText" v-if="!$v.password.required">Filed is required</p>
                    <p class="errorText" v-if="!$v.password.minLength">Name must have at least {{$v.password.$params.minLength.min}} !</p>
                    <input type="password"
                           v-model="password"
                           :class="{error: $v.password.$error}"
                           @change="$v.password.$touch()"
                    >
                </div>

                <div class="form-item" :class="{errorInput: $v.repeatPassword.$error}">
                    <label>Password:</label>
                    <p class="errorText" v-if="!$v.repeatPassword.required">Filed is required</p>
                    <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical !</p>
                    <input type="password"
                            v-model="repeatPassword"
                            :class="{error: $v.repeatPassword.$error}"
                            @change="$v.repeatPassword.$touch()"
                    >
                </div>

                <button class="btn btnPrimary">Register now</button>

                <br>

                <hr>

                <a href="#" @click.prevent="$emit('close', true)">I have a login</a>

            </form>
        </div>
    </modal>
</template>

<script>
    import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
    import modal from './UI/Modal'

    export default {

        name: "ModalRegistration",

        components: {modal},

        data() {
            return {
                email: '',

                password: '',

                repeatPassword: ''
            }
        },

        validations: {
            email: {
                required,
                email
            },

            password: {
                required,
                minLength: minLength(6),
            },

            repeatPassword: {
                required,
                sameAsPassword: sameAs('password')
            }
        },

        methods: {
            submit() {
                this.$v.$touch();

                if (!this.$v.$invalid) {

                    const user = {
                        email: this.email,
                        password: this.password
                    };

                    console.log(user);

                    this.hideModal();
                }
            },

            hideModal() {
                this.email = '';
                this.password = '';
                this.repeatPassword = '';
                this.$v.$reset();
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    hr{
        margin: 15px;
    }
</style>
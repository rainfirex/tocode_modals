<template>
    <modal
            :title="'Modal with form'"
            @close="hideModal">
        <div slot="body">
            <form @submit.prevent="onSubmit">

                <div class="form-item" :class="{errorInput: $v.name.$error}">
                    <label>Name:</label>
                    <p class="errorText" v-if="!$v.name.required">Filed is required</p>
                    <p class="errorText" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} !</p>
                    <input
                            v-model="name"
                            :class="{error: $v.name.$error}"
                            @change="$v.name.$touch()"
                    >
                </div>

                <div class="form-item" :class="{errorInput: $v.password.$error}">
                    <label>Password:</label>
                    <p class="errorText" v-if="!$v.password.required">Filed is required</p>
                    <p class="errorText" v-if="!$v.password.minLength">Name must have at least {{$v.password.$params.minLength.min}} !</p>
                    <input
                            v-model="password"
                            :class="{error: $v.password.$error}"
                            @change="$v.password.$touch()"
                    >
                </div>

                <div class="form-item" :class="{errorInput: $v.repeatPassword.$error}">
                    <label>Password:</label>
                    <p class="errorText" v-if="!$v.repeatPassword.required">Filed is required</p>
                    <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical !</p>
                    <input
                            v-model="repeatPassword"
                            :class="{error: $v.repeatPassword.$error}"
                            @change="$v.repeatPassword.$touch()"
                    >
                </div>

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

                <button class="btn btnPrimary">Submit!</button>
            </form>
        </div>
    </modal>
</template>

<script>
    import { required, minLength, between, email, sameAs } from 'vuelidate/lib/validators'
    import modal from './UI/Modal'

    export default {

        name: "ModalValidate",

        components: {modal},

        data() {
            return {

                name: '',

                password: '',

                repeatPassword: '',

                email: ''
            }
        },

        validations: {
            name: {
                required,
                minLength: minLength(4)
            },

            password: {
                required,
                minLength: minLength(6),
            },

            repeatPassword: {
                required,
                sameAsPassword: sameAs('password')
            },

            email: {
                required,
                email
            }
        },

        methods: {
            onSubmit() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    const user = {
                        name: this.name,
                        password: this.password,
                        email: this.email
                    };

                    console.log(user);

                    this.hideModal();
                }

            },

            hideModal() {
                this.name = '';
                this.password = '';
                this.repeatPassword = '';
                this.email = '';
                this.$v.$reset();
                this.$emit('close')
            }
        }

    }
</script>
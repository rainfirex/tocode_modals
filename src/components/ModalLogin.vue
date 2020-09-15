<template>
    <modal
            :title="'Login'"
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

                <button class="btn btnPrimary">Enter</button>

                <br>

                <hr>

                <a href="#" @click.prevent="$emit('close', true)">I need login</a>
            </form>
        </div>
    </modal>
</template>

<script>
    import { required, minLength, email } from 'vuelidate/lib/validators'
    import modal from './UI/Modal'

    export default {

        name: "ModalLogin",

        components: {modal},

        data() {
            return {

                email: '',

                password: ''
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
                this.$v.$reset();
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    hr{
        margin: 15px;
    }
</style>
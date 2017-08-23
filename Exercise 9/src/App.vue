<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <app-full-name v-model="userData.fullName"></app-full-name>

                    <div class="form-group">
                        <label for="formEmail">Email address</label>
                        <input type="email" class="form-control" id="formEmail" placeholder="Email"
                               v-model="userData.email">
                    </div>

                    <div class="form-group">
                        <label for="formPassword">Password</label>
                        <input type="password" class="form-control" id="formPassword"
                               v-model="userData.password">
                    </div>

                    <div class="checkbox">
                        <label>
                            <input type="checkbox" v-model="userData.store"> Store data
                        </label>
                    </div>

                    <input type="submit" class="btn btn-primary" @click.prevent="submitForm"></input>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppFullName from './FullName.vue';

    export default {
        data() {
            return {
                isSubmitted: false,
                userData: {
                    fullName: '',
                    password: '',
                    email: '',
                    store: true,
                }
            }
        },
        methods: {
            submitForm() {
                this.isSubmitted = true;
            }
        },
        components: {
            AppFullName
        }
    }
</script>

<style>
</style>

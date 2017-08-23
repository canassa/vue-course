<template>
    <div class="form-group">
        <label>Full Name</label>
        <div class="form-inline">
            <div class="form-group">
                <label for="formFirstName" class="sr-only">First Name</label>
                <input type="text" class="form-control" id="formFirstName" placeholder="First Name"
                       @input="changed"
                       v-model="firstName">
            </div>
            <div class="form-group">
                <label for="formFirstName" class="sr-only">Last Name</label>
                <input type="text" class="form-control" id="formLastName" placeholder="Last Name"
                       @input="changed"
                       v-model="lastName">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
                firstName: '',
                lastName: ''
            }
        },
        methods: {
            changed() {
                this.$emit('input', `${this.firstName} ${this.lastName}`.trim());
            }
        }
    }
</script>

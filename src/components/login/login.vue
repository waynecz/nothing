<script type="text/ecmascript-6">
	/**
	 * Created by wcz on 2017/1/5.
	 */
	export default {
		data () {
			return {
				form: {
					username: '',
					password: '',
                },

				rules: {
					username: [
						{required: true, message: '请填写用户名', trigger: 'blur'},
					],
					password: [
						{required: true, message: '请填写密码', trigger: 'blur'},
					]
				},
			}
		},
		computed: {},
		mounted () {

		},
		methods: {
			login() {

				let postData = new FormData();

				postData.append('username', this.form.username);
				postData.append('password', this.form.password);

				this.jax('/operator/login', postData)
					.then(res => {
						if (res.success) {
							this.$router.push('/home/tasks');
						}
					})
			}
		},
	};
</script>

<template>
    <div class="login" layout="row center-center">
        <div class="login__form">
            <div class="login__title">登录车捕头</div>
            <div class="login__box">
                <el-form ref="form" :model="form" :rules="rules" label-width="0">
                    <el-form-item label="" prop="username">
                        <el-input v-model="form.username" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                        <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" class="mt30 full" @click="login">登录</el-button>
            </div>

        </div>
    </div>
</template>
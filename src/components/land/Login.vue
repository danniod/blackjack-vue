<template>
  <div class="center" v-if="dialog">
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">
          Welcome to <b>BlackJack</b>
        </h4>
      </template>


      <div class="con-form">
        <vs-input v-model="form.username" placeholder="Username">
          <template #icon>
            <i class='el-icon-user'></i>
          </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Password">
          <template #icon>
            <i class='el-icon-unlock'></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="form.remember">记住我</vs-checkbox>
          <a href="https://pwl.icu/forget-pwd">忘记密码？</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="login">
            登 录
          </vs-button>

          <div class="new">
            <a href="https://pwl.icu/register?r=dannio">注册</a>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import md5 from 'js-md5'

export default {
  data() {
    return {
      dialog: false,
      active: false,
      password: '',
      form: {
        username: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    open() {
      this.active = true
    },
    login() {
      this.form.password = md5(this.password)
      this.$service.post(this.$api.user.login, this.form)
    }
  }
}
</script>

<style lang="stylus">
getColor(vsColor, alpha = 1)
unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
unquote("var(--vs-"+var+")")
.not-margin
  margin 0px
  font-weight normal
  padding 10px
.con-form
  width 100%
  .flex
    display flex
    align-items center
    justify-content space-between
    a
      font-size .8rem
      opacity .7
      &:hover
        opacity 1
  .vs-checkbox-label
    font-size .8rem
  .vs-input-content
    margin 10px 0px
    width calc(100%)
    .vs-input
      width 100%
.footer-dialog
  display flex
  align-items center
  justify-content center
  flex-direction column
  width calc(100%)
  .new
    margin 0px
    margin-top 20px
    padding: 0px
    font-size .7rem
    a
      color getColor('primary') !important
      margin-left 6px
      &:hover
        text-decoration underline
  .vs-button
    margin 0px
</style>

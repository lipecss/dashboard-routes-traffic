<template>
  <b-container fluid class="login-page">
    <b-row>
      <b-col cols="12" xs="12" class="login-page__content" order="2">
        <div class="login-page__content--form" order="1">
          <h1>oi</h1>
          <p>{{ $t('pages.website.loginPage.title') }}</p>

          <b-form-input
          v-model="loginData.username"
          size="md"
          type="text"
          :placeholder="$t('inputs.username.placeholder')"
          :disabled="blockUi"
          /><br>

          <b-form-input
          v-model="loginData.password"
          size="md"
          type="password"
          :placeholder="$t('inputs.password.placeholder')"
          :disabled="blockUi"
          /><br>

          <button
          @click="loginUser($event)"
          :disabled="blockUi"
          class="login-page__content--form--button">
            {{ $t('buttons.signIn') }}
          </button>
        </div>

        <div class="login-page__content--footer">
          <!-- <TheI18nButton style="text-align: center;"/> -->
          <p>Copyright © 2021 Uello. All Rights Reserved.</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { authUser } from '@helpers/queries'
import { removeSpaceInString, setLocalToken, removeLocalToken } from '@helpers/functions'
export default {
  name: 'LoginPage',
  metaInfo () {
    return {
      title: this.$t('pages.website.loginPage.html.title'),
      link: [
        { rel: 'canonical', href: `${process.env.VUE_APP_BASE}/login` }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.changeBlockUi(false)
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      hasError: false,
      loginData: {
        username: '',
        password: ''
      },
      usernameIsValid: false,
      passwordIsValid: false
    }
  },
  props: {},
  components: {
    // TheI18nButton: () => import('@components/layout/TheI18nButton')
  },
  computed: {
    ...mapGetters('ModuleUser', [
      'userRole'
    ]),
    ...mapGetters([
      'blockUi'
    ]),
    disableLoginButton () {
      if (!this.blockUi && this.loginData.username && this.usernameIsValid && this.loginData.password && this.passwordIsValid) return false
      return true
    }
  },
  methods: {
    ...mapActions('ModuleLogin', [
      'changeLogged'
    ]),
    ...mapActions('ModuleUser', [
      'changeUserRole'
    ]),
    async loginUser (event) {
      const username = this.loginData.username
      const password = this.loginData.password
      if (!event || !username || !password) return
      this.changeBlockUi(true)
      // Login com a api
      const resultAuth = await authUser(removeSpaceInString(username), removeSpaceInString(password))
      if (!resultAuth) {
        // Removendo no localStore o token e a role do usuario
        removeLocalToken()
        this.changeLogedRole(false, '')
        this.changeBlockUi(false)
      } else {
        const userRole = 'client'
        const userToken = 'tokenqualquer'
        // Salvando no localStore o token e a role do usuario
        setLocalToken(userToken)
        this.changeLogedRole(true, userRole)
        if (userRole === 'admin' || userRole === 'client') {
          await this.hasGoBackAfterLogin(userRole)
        } else {
          this.$router.push({ name: 'HomePage' })
        }
      }
    }
  },
  filters: {},
  watch: {
    loginData: {
      deep: true,
      immediate: true,
      handler (value) {
        if (value.username) {
          this.usernameIsValid = true
        } else {
          this.usernameIsValid = false
        }
        if (value.password) {
          this.passwordIsValid = true
        } else {
          this.passwordIsValid = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  .login-page__content {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $gray-hard;
    // background: linear-gradient(-45deg, $monotone-primary, $pink-channel, $monotone-primary);
    background-size: 400% 400%;
    animation: gradientBG 15s ease-in infinite;
    &--logo {
      position: absolute;
      top: 90px;
      width: 150px;
      height: 150px;
      max-width: 150px;
      transform: translatey(0px);
      animation: float 3s ease-in-out infinite;
      z-index: 10;
      img {
        width: 100%;
        height: auto;
      }
    }
    &--form {
      position: relative;
      width: 362px;
      margin: 38px;
      top: 80px;
      text-align: center;
      h1 {
        font-weight: 700;
        text-shadow: 0px 1px #fff;
      }
      &--button {
        bottom: 15px;
        right: 20px;
        background: transparent;
        color: $gray;
        border: 1px solid $gray;
        padding: .375rem .75rem;
        border-radius: 20px;
        text-transform: uppercase;
        font-weight: 500;
        transition: 0.5s;
        &:hover {
          background: $gray;
          color: $hover-secondary;
          transform: translateY(-5px);
        }
      }
    }
    &--footer {
      position: absolute;
      bottom: 0;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {}
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1024px) {
    .login-page__content {
      &--logo {
        top: 25px;
      }
      &--form {
        top: 10px;
      }
    }
  }
  @media screen and (min-width: 1400px) {}
  @media screen and (min-width: 1600px) {}
}
.row {
  height: 100vh;
}
// Animations
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>

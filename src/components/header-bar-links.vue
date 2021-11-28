<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a  target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-2x" aria-hidden="true">{{signIn}}</i>
          </a>
          <a  target="_blank" rel="noopener noreferrer">
            <i class="" aria-hidden="true">{{signOut}}</i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signIn: 'Log in',
      signOut: 'Sign Up',
    };
  },
};
</script>

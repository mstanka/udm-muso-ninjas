<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'Home' }">
        <div class="logo">
          <img src="../assets/ninja.png" alt="ninja logo" class="logo-img" />
          <h1 class="logo-title">Muso Ninjas</h1>
        </div>
      </router-link>

      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'UserPlaylists' }" class="link"
            >My Playlists</router-link
          >
          <router-link :to="{ name: 'CreatePlaylist' }" class="link"
            >Create Playlist</router-link
          >
          <span class="link">Hi here, {{ user.displayName }}</span>
          <button class="btn link" @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn link" :to="{ name: 'Signup' }"
            >Signup</router-link
          >
          <router-link class="btn link" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      router.push({ name: 'Login' });
    };

    return { handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
}

.links {
  margin: 20px auto;
  text-align: center;
}

.link {
  display: inline-block;
  margin: 10px 5px;
  font-size: 14px;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.logo-img {
  display: block;
  width: 50px;
  height: 50px;
  margin-left: 20px;
}

.logo-title {
  font-size: 1.5rem;
}

span {
  font-size: 14px;
  padding-left: 8px;
  border-left: 1px solid rgb(50, 50, 50);
}

@media screen and (min-width: 768px) {
  nav {
    flex-direction: row;
  }

  .links {
    margin: 0;
  }
  .link {
    margin: 0 5px;
  }
}
</style>

<template>
  <img class="LogoReveal" alt="Logo" src="/logo.png" />
</template>

<style>
.LogoReveal {
  height: 360px;
  width: 360px;
  transform: rotateY(560deg);
  animation: turn 2.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

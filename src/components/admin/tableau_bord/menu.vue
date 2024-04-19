<template>
    <section class="menu">
        <font-awesome-icon class="icon menu" icon="bars" />
        <div class="user">
            <img class="img" src="../../../assets/images_yeo/employe.png" alt="">
            <h5>Bienvenue <span class="animation">admin</span></h5>
        </div>
        <section class="recherche">
            <button class="button">
            <svg viewBox="0 0 448 512" class="bell"><path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
            <p class="notif">5</p>
        </button>
        <div class="input-wrapper">
            <button class="icon"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
                </svg>
            </button>
            <input placeholder="search.." class="input" name="text" type="text">
        </div>
        </section>
    </section>
</template>
<script lang="ts">

</script>

<style scoped>
.menu{
    width: 98%;
    height: 100%;
    background-color: #C3B649;
    border-radius: 10px;
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center; 
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

p.notif{
    background-color: #F2EED1;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 10px;
    font-weight: 800;
}

.user{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    width: 30%;
}

.user span{
    color: white;
    font-weight: 900;
}



.img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #F2EED1;
}
.icon.menu{
    color: rgb(0, 0, 0);
    height: 25px;
    width: 25px;
    margin-left: 10px;
    display: none;
}

/* SEECTION RECHERCHE */

.recherche{
    display: flex;
    gap: 10px;
    width: 70%;
    display: flex;
    justify-content: flex-end;
    margin-right: 1%;
}

/* RECHERCHE BTN */

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
}

.input {
  border-style: none;
  height: 40px;
  width: 10px;
  padding: 10px;
  outline: none;
  border-radius: 50%;
  transition: .5s ease-in-out;
  background-color: #F2EED1;
  box-shadow: 0px 0px 3px #f3f3f3;
  padding-right: 40px;
  color: #fff;
}

.input::placeholder,
.input {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
}

.input::placeholder {
  color: #8f8f8f;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 35px;
  height: 35px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  pointer-events: painted;
  background-color: black;
  transition: .2s linear;
}

.icon:focus ~ .input,
.input:focus {
  box-shadow: none;
  width: 250px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 3px solid black;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}


/* NOTIFICATIONS */

.button {
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  border: none;
}

.bell {
  width: 18px;
}

.bell path {
  fill: white;
}

.button:hover {
  background-color: rgb(44, 44, 44);
}

.button:hover .bell {
  animation: bellRing 0.9s infinite;
}

/* bell ringing animation keyframes*/
@keyframes bellRing {
  0%,
  100% {
    transform-origin: top;
  }

  15% {
    transform: rotateZ(10deg);
  }

  30% {
    transform: rotateZ(-10deg);
  }

  45% {
    transform: rotateZ(5deg);
  }

  60% {
    transform: rotateZ(-5deg);
  }

  75% {
    transform: rotateZ(2deg);
  }
}

.button:active {
  transform: scale(0.8);
}



</style>
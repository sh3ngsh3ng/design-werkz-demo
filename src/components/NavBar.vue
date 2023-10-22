<template>
    <div>
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" @click="goToPage('/')"><img id="nav-logo" src="../assets/logo.jpg" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a :class="['nav-link', {
                                active: $route.path === '/'
                            }]" @click="goToPage('/')">Home</a>
                        </li>
                        <li class="nav-item">
                            <a :class="['nav-link', {
                                active: $route.path === '/services'
                            }]" @click="goToPage('/services')">Services</a>
                        </li>
                        <li class="nav-item">
                            <a :class="['nav-link', {
                                active: $route.path === '/about'
                            }]" @click="goToPage('/about')">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a :class="['nav-link', {
                                active: $route.path === '/portfolio'
                            }]" @click="goToPage('/portfolio')">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>



<script>
    export default {
        name: "NavBar"
    }
</script>



<style scoped>
    #nav-logo {
        height: 50px;
        border-radius: 20px;
    }
</style>
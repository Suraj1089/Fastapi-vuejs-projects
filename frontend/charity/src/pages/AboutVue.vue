<template>
    <!-- About -->
    <!-- about us, our mission, our vision, our values -->
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about_image"><img src="images/about.jpg" alt=""></div>
                </div>
                <div class="col-lg-6">
                    <div class="about_content">
                        <div class="section_title"><h2>About Us</h2></div>
                        <div class="about_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Donec rutrum sapien 
                            massa, a sollicitudin metus ultrices a. Sed porttitor maximus turpis, in varius nibh fermentum vel. Donec sollicitudin urna non dui ultricies,
                            a maximus mauris tincidunt. Sed porttitor maximus turpis, in varius nibh fermentum vel. Donec sollicitudin urna non dui ultricies,
                            a maximus mauris tincidunt.</p>
                        </div>
                        <div class="button about_button"><a href="#">read more</a></div>
                    </div>
                </div>
            </div>
        </div>
    <CardsVue />
    </div>

                            
</template>

<script>
import CardsVue from '../components/CardsVue.vue'
export default {
    components: {
        CardsVue
    }
}
</script>

<style>

</style>
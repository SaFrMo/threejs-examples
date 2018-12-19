<template>
    <main class="three-examples">
        <h2>Examples</h2>

        <ul class="grid">
            <li>
                <!-- <span class="title">Breathing Tower</span> -->
                <div class="wrap"><purple-tower /></div>
            </li>
        </ul>
    </main>
</template>

<script>
import PurpleTower from './examples/PurpleTower'

export default {
    components: {
        'purple-tower': PurpleTower
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

.three-examples {
    font-family: $font-family;

    .grid {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            width: 200px;
            height: 200px;
            position: relative;
            border: 1px solid $black;
            border-radius: 10px;
            // background: rgba($color4, 0.1);
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .title {
                border-bottom: 1px solid $black;
                padding: 8px 5px 10px;
                font-family: $header-font;
                text-transform: lowercase;
                font-weight: 700;
            }
            .wrap {
                position: relative;
                flex: 1;
            }
        }
    }
}
</style>

<template>
    <main class="three-examples">
        <h2>Examples</h2>

        <ul class="grid">
            <li class="item" v-for="(cmp, i) in toRender" :key="i">
                <button class="wrap">
                    <span class="title">Breathing Tower</span>
                    <component :is="cmp" />
                </button>
            </li>
        </ul>
    </main>
</template>

<script>
import PurpleTower from './examples/PurpleTower'

export default {
    components: {
        'purple-tower': PurpleTower
    },
    data() {
        return {
            toRender: ['purple-tower']
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

.three-examples {
    font-family: $font-family;

    button {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        border: none;
        cursor: pointer;

        &:hover,
        &:focus {
            .title {
                z-index: 5;
            }
        }
    }
    .grid {
        list-style: none;
        padding: 0;
        margin: 0;

        .item {
            width: 180px;
            height: 200px;
            position: relative;
            border: 1px solid $black;
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .title {
                border-bottom: 1px solid $black;
                padding: 8px 5px 10px;
                font-family: $header-font;
                text-transform: lowercase;
                font-weight: 700;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                background: $white;
                font-size: 16px;
                padding: 5px;
            }
            .wrap {
                position: relative;
                flex: 1;
            }
        }
    }
}
</style>

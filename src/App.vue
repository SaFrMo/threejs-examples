<template>
    <main class="three-examples">
        <h2>Examples</h2>

        <ul class="grid">
            <li class="item" v-for="(cmp, i) in toRender" :key="i">
                <button class="wrap">
                    <span class="title" v-html="startCase(cmp)" />
                    <component :is="cmp" />
                </button>
            </li>
        </ul>

        <!-- <wandering-nav /> -->
    </main>
</template>

<script>
import startCase from 'lodash/startCase'
import PurpleTower from './examples/PurpleTower'
import WanderingNav from './examples/WanderingNav'
import HoverLight from './examples/HoverLight'
import PyramidFollow from './examples/PyramidFollow'
import ShapeClicker from './examples/ShapeClicker'
import CartoonPipe from './examples/CartoonPipe'

export default {
    components: {
        'breathing-tower': PurpleTower,
        'wandering-spheres': WanderingNav,
        'revolving-lights': HoverLight,
        'trailing-pyramid': PyramidFollow,
        'shape-clicker': ShapeClicker,
        'cartoon-pipe': CartoonPipe
    },
    data() {
        return {
            toRender: [
                'breathing-tower',
                'revolving-lights',
                'trailing-pyramid',
                'wandering-spheres',
                'shape-clicker',
                'cartoon-pipe'
            ]
        }
    },
    methods: {
        startCase
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .item {
            width: 200px;
            height: 200px;
            position: relative;
            border: 1px solid $black;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin: 20px;

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
                padding: 10px 5px;
            }
            .wrap {
                position: relative;
                flex: 1;
            }
        }
    }
}
</style>

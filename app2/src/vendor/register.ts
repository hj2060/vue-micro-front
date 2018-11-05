import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import * as decorator from 'vue-property-decorator'
window.__modules__ = window.__modules__ || {};
window.__modules__.Vue = Vue
window.__modules__.Vuex = Vuex
window.__modules__.VuePropertyDecorator = decorator
window.__modules__.VueRouter = VueRouter as any
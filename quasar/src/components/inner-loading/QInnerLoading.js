import Vue from 'vue'

import TransitionMixin from '../../mixins/transition.js'
import QSpinner from '../spinner/QSpinner.js'

export default Vue.extend({
  name: 'QInnerLoading',

  mixins: [ TransitionMixin ],

  props: {
    showing: Boolean,
    color: String,

    size: {
      type: [String, Number],
      default: 42
    },

    dark: Boolean
  },

  render (h) {
    const content = this.$slots.default || [
      h(QSpinner, {
        props: {
          size: this.size,
          color: this.color
        }
      })
    ]

    return h('transition', {
      props: { name: this.transition }
    }, [
      this.showing ? h('div', {
        staticClass: 'q-inner-loading absolute-full column flex-center',
        class: this.dark ? 'q-inner-loading--dark' : null
      }, content) : null
    ])
  }
})

import Component from '@ember/component';
import { copy } from '@ember/object/internals';

export default Component.extend({


    //fullName: [],

    didReceiveAttrs() {
        this._super(...arguments);
        this.set('fullNames', []);
    },

    actions: {
        onAddName(firstName, lastName) {
            const fullNames = this.get('fullNames');
            fullNames.pushObject({
                fullName: `${firstName} ${lastName}`
            });

            this.set('fullNames', copy(this.get('fullNames'), true));
        }
    }
});

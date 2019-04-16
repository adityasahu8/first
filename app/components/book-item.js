import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
    ajax: service(),

    fetchBookDetails: task(function * (){
        const book = this.get('book');
        const result = yield his.get('ajax').request(`http://10.230.40.235:3000/${books.id}`);
        this.set('price', result.price);
        this.set('pages', result.pages);
    }),

    didReceiveAttrs(){
        this._super(...arguments);
        // const book = this.get('book');
        // this.set('stillFetching', true);
        // this.get('ajax').request(`http://10.230.40.235:3000/${books.id}`)
        //     .then((result) => {
        //         this.set('stillFetching', false);
        //         this.set('price', result.price);
        //         this.set('pages', result.pages);
        //     })

        this.get('fetchBookDetails').perform();
    },
});

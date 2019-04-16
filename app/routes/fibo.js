import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({

    utility: service(), // Dependency injection

    model(){
        return this.get("utility").getFiboSeries(8);
    }
});

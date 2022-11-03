import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { assert } from '@ember/debug';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    assert(
      'There should be 0 models before createRecord',
      this.store.peekAll('my-model').length === 0
    );
    let model = this.store.createRecord('my-model');
    this.store.peekAll('my-model').length;
    model.unloadRecord();
    assert(
      'There should be 0 models after unloadRecord',
      this.store.peekAll('my-model').length === 0
    );
  }
}

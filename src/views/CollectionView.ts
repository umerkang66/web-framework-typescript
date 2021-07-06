import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemparent: Element): void;

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');

    this.collection.model.forEach((model: T): void => {
      const itemParent = document.createElement('div');

      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    });

    this.parent.append(templateElement.content);
  }
}
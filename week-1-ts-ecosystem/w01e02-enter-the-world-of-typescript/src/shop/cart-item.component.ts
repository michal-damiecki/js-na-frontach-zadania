import { div } from '../framework/dom-creators';
import { CartItem } from '../types';

export function cartItem({ name, amount, unit, price }: CartItem) {
  const $panelBlock = div('panel-block');
  const $name = div();
  const $amount = div('ml-auto');
  const $unit = div('tag');
  const $price = div('ml-4');

  $name.textContent = name;
  $amount.textContent = amount.toString();
  $unit.textContent = unit;
  $price.textContent = `${price.value} ${price.currency}`;
  $panelBlock.append($name, $amount, $unit, $price);

  return $panelBlock;
}

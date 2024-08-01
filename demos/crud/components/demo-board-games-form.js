import { LitElement, html, css } from 'lit';
import '@dile/ui/components/input/input.js';
import '@dile/ui/components/input/input-integer';
import '@dile/ui/components/checkbox/checkbox.js';
import { DileForm } from '@dile/ui/mixins/form'

export class DemoBoardGamesForm extends DileForm(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <dile-input label="Nombre" name="name" id="name" hideErrorOnInput></dile-input>
      <dile-input label="Slug" name="slug" id="slug" hideErrorOnInput></dile-input>
      <dile-input-integer name="year" label="Year" hideErrorOnInput id="year"></dile-input-integer>
      <p><dile-checkbox name="essential">Essential</dile-checkbox></p>
    `;
  }
}
customElements.define('demo-board-games-form', DemoBoardGamesForm);

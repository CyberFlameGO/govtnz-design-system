import { Component, Input } from "@angular/core";
@Component({
  selector: "g-Select",
  template: `
    <select
      class="g-select"
      id="{{ selectId }}"
      name="{{ name }}"
      required="{{ required }}"
      multiple="{{ multiple }}"
    >
      <slot></slot>
    </select>
  `
})
export class AppComponent {
  @Input() selectId: string | undefined;
  @Input() name: string;
  @Input() required: boolean | undefined;
  @Input() multiple: boolean | undefined;
  @Input() children: React.ReactNode;
  title = "Select";
}

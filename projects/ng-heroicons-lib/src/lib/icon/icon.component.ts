import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnChanges, Renderer2 } from '@angular/core';
import { ICON_SET_TOKEN } from '../icon-set.token';

@Component({
  selector: 'ng-heroicon',
  template: '',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {
  @Input() name: string | undefined;

  private readonly icons: Readonly<Record<string, string>> = {};

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    @Inject(ICON_SET_TOKEN) iconsets: any
  ) {
    const iconsetGroups = iconsets as ReadonlyArray<Record<string, string>>;
    this.icons = iconsetGroups.reduce((icons, iconset) => ({
      ...icons,
      ...iconset,
    }));
  }

  ngOnChanges(): void {
    if (!this.name) {
      return;
    }
    const name = this.camelize(this.name);
    if (!this.icons.hasOwnProperty(name)) {
      return console.warn(
        `No icon named ${name} was found. You may need to import it using the withIcons function.`
      );
    }

    const content = this.icons[name];
    let svg = '';
    if (!content.includes('<svg')) {
      svg = this.name.includes('solid') ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">'
        : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">';
      svg = svg + content + '</svg>';
    }
    else {
      svg = content;
    }

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      svg
    );
  }

  camelize(value: string = ''): string {
    return value
      .replace(/(-|_|\.|\s)+(.)?/g, (match, separator, character) => character ? character.toUpperCase() : '')
      .replace(/^([A-Z])/, (match) => match.toLowerCase());
  }
}

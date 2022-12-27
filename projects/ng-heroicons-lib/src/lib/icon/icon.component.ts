import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnChanges, Renderer2 } from '@angular/core';
import { ICON_SET_TOKEN } from '../icon-set.token';

@Component({
  selector: 'icon',
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
    const name = this.getPropertyName(this.name);
    if (!this.icons.hasOwnProperty(name)) {
      return console.warn(
        `No icon named ${name} was found. You may need to import it using the withIcons function.`
      );
    }

    const content = this.icons[name];
    let svg = '';
    if (!content.includes('<svg')) {
      if (this.name.includes('mini')) {
        svg = '<svg stroke="currentColor" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">';
      } else {
        svg = '<svg stroke="currentColor" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">';
      }
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

  getPropertyName(value: string = ''): string {
    const name = value;
    if (value.includes('mini')) {
      return name.replace(/-/g, '_').replace('mini', '20_solid');
    } else if (value.includes('solid')) {
      return name.replace(/-/g, '_').replace('solid', '24_solid');
    } else {
      return name.replace(/-/g, '_') + '_24_outline';
    }
  }
}

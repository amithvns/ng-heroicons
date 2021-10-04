import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { ICON_SET_TOKEN } from '../icon-set.token';
import * as i0 from "@angular/core";
export class IconComponent {
    constructor(elementRef, renderer, iconsets) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.icons = {};
        const iconsetGroups = iconsets;
        this.icons = iconsetGroups.reduce((icons, iconset) => (Object.assign(Object.assign({}, icons), iconset)));
    }
    ngOnChanges() {
        if (!this.name) {
            return;
        }
        const name = this.camelize(this.name);
        if (!this.icons.hasOwnProperty(name)) {
            return console.warn(`No icon named ${name} was found. You may need to import it using the withIcons function.`);
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
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', svg);
    }
    camelize(value = '') {
        return value
            .replace(/(-|_|\.|\s)+(.)?/g, (match, separator, character) => character ? character.toUpperCase() : '')
            .replace(/^([A-Z])/, (match) => match.toLowerCase());
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: ICON_SET_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: IconComponent, selector: "icon", inputs: { name: "name" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true, styles: [":host{display:inline-block}:host ::ng-deep svg{width:inherit;height:inherit}:host ::ng-deep path{stroke:currentColor}:host ::ng-deep path.no-stroke,:host ::ng-deep g.no-stroke{stroke:none}:host ::ng-deep path.no-fill,:host ::ng-deep g.no-fill{fill:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'icon',
                    template: '',
                    styleUrls: ['./icon.component.scss'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ICON_SET_TOKEN]
                }] }]; }, propDecorators: { name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1oZXJvaWNvbnMtbGliL3NyYy9saWIvaWNvbi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLE1BQU0sRUFBRSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFRbkQsTUFBTSxPQUFPLGFBQWE7SUFLeEIsWUFDbUIsVUFBbUMsRUFDbkMsUUFBbUIsRUFDWixRQUFhO1FBRnBCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKckIsVUFBSyxHQUFxQyxFQUFFLENBQUM7UUFPNUQsTUFBTSxhQUFhLEdBQUcsUUFBaUQsQ0FBQztRQUN4RSxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxpQ0FDakQsS0FBSyxHQUNMLE9BQU8sRUFDVixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDakIsaUJBQWlCLElBQUkscUVBQXFFLENBQzNGLENBQUM7U0FDSDtRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxrRkFBa0Y7Z0JBQ3BILENBQUMsQ0FBQyxtSEFBbUgsQ0FBQztZQUN4SCxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7U0FDaEM7YUFDSTtZQUNILEdBQUcsR0FBRyxPQUFPLENBQUM7U0FDZjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsV0FBVyxFQUNYLEdBQUcsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQixFQUFFO1FBQ3pCLE9BQU8sS0FBSzthQUNULE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ3ZHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OzBHQWxEVSxhQUFhLHFFQVFkLGNBQWM7OEZBUmIsYUFBYSwyRkFKZCxFQUFFOzJGQUlELGFBQWE7a0JBTnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQVNJLE1BQU07MkJBQUMsY0FBYzs0Q0FQZixJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ09OX1NFVF9UT0tFTiB9IGZyb20gJy4uL2ljb24tc2V0LnRva2VuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaWNvbicsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGljb25zOiBSZWFkb25seTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASW5qZWN0KElDT05fU0VUX1RPS0VOKSBpY29uc2V0czogYW55XHJcbiAgKSB7XHJcbiAgICBjb25zdCBpY29uc2V0R3JvdXBzID0gaWNvbnNldHMgYXMgUmVhZG9ubHlBcnJheTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PjtcclxuICAgIHRoaXMuaWNvbnMgPSBpY29uc2V0R3JvdXBzLnJlZHVjZSgoaWNvbnMsIGljb25zZXQpID0+ICh7XHJcbiAgICAgIC4uLmljb25zLFxyXG4gICAgICAuLi5pY29uc2V0LFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubmFtZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jYW1lbGl6ZSh0aGlzLm5hbWUpO1xyXG4gICAgaWYgKCF0aGlzLmljb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYE5vIGljb24gbmFtZWQgJHtuYW1lfSB3YXMgZm91bmQuIFlvdSBtYXkgbmVlZCB0byBpbXBvcnQgaXQgdXNpbmcgdGhlIHdpdGhJY29ucyBmdW5jdGlvbi5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuaWNvbnNbbmFtZV07XHJcbiAgICBsZXQgc3ZnID0gJyc7XHJcbiAgICBpZiAoIWNvbnRlbnQuaW5jbHVkZXMoJzxzdmcnKSkge1xyXG4gICAgICBzdmcgPSB0aGlzLm5hbWUuaW5jbHVkZXMoJ3NvbGlkJykgPyAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj4nXHJcbiAgICAgICAgOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JztcclxuICAgICAgc3ZnID0gc3ZnICsgY29udGVudCArICc8L3N2Zz4nO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHN2ZyA9IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdpbm5lckhUTUwnLFxyXG4gICAgICBzdmdcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjYW1lbGl6ZSh2YWx1ZTogc3RyaW5nID0gJycpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgIC5yZXBsYWNlKC8oLXxffFxcLnxcXHMpKyguKT8vZywgKG1hdGNoLCBzZXBhcmF0b3IsIGNoYXJhY3RlcikgPT4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJylcclxuICAgICAgLnJlcGxhY2UoL14oW0EtWl0pLywgKG1hdGNoKSA9PiBtYXRjaC50b0xvd2VyQ2FzZSgpKTtcclxuICB9XHJcbn1cclxuIl19
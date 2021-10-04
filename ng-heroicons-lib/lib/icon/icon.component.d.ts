import { ElementRef, OnChanges, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IconComponent implements OnChanges {
    private readonly elementRef;
    private readonly renderer;
    name: string | undefined;
    private readonly icons;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, iconsets: any);
    ngOnChanges(): void;
    camelize(value?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "icon", never, { "name": "name"; }, {}, never, never>;
}

import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./icon/icon.component";
export declare class IconsModule {
    constructor(icons: any);
    /**
     * Define the icons that you wish to include in the application.
     * Each module can choose which icons to include to improve
     * tree-shakability
     * @param icons The list of icons to include
     */
    static withIcons(icons: Record<string, string>): ModuleWithProviders<IconsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconsModule, [{ optional: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<IconsModule, [typeof i1.IconComponent], never, [typeof i1.IconComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<IconsModule>;
}

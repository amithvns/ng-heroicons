import { Inject, NgModule, Optional } from '@angular/core';
import { ICON_SET_TOKEN } from './icon-set.token';
import { IconComponent } from './icon/icon.component';
import * as i0 from "@angular/core";
export class IconsModule {
    constructor(icons) {
        // if there are no icons defined then the user has likely forgotten to use the
        // `withIcons` static function when importing
        if (!icons) {
            console.warn('No icons have been included. Import IconsModule.withIcons({ ... }) to include some icons.');
        }
    }
    /**
     * Define the icons that you wish to include in the application.
     * Each module can choose which icons to include to improve
     * tree-shakability
     * @param icons The list of icons to include
     */
    static withIcons(icons) {
        return {
            ngModule: IconsModule,
            providers: [
                { provide: ICON_SET_TOKEN, useValue: icons, multi: true }
            ]
        };
    }
}
IconsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconsModule, deps: [{ token: ICON_SET_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.NgModule });
IconsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconsModule, declarations: [IconComponent], exports: [IconComponent] });
IconsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconsModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: IconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        IconComponent
                    ],
                    exports: [
                        IconComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ICON_SET_TOKEN]
                }, {
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctaGVyb2ljb25zLWxpYi9zcmMvbGliL2ljb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBVXRELE1BQU0sT0FBTyxXQUFXO0lBRXRCLFlBQWdELEtBQVU7UUFDeEQsOEVBQThFO1FBQzlFLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQywyRkFBMkYsQ0FBQyxDQUFDO1NBQzNHO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUE2QjtRQUM1QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDMUQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7d0dBdkJVLFdBQVcsa0JBRUYsY0FBYzt5R0FGdkIsV0FBVyxpQkFOcEIsYUFBYSxhQUdiLGFBQWE7eUdBR0osV0FBVzsyRkFBWCxXQUFXO2tCQVJ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3FCQUNkO2lCQUNGOzswQkFHYyxNQUFNOzJCQUFDLGNBQWM7OzBCQUFHLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ09OX1NFVF9UT0tFTiB9IGZyb20gJy4vaWNvbi1zZXQudG9rZW4nO1xyXG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBJY29uQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBJY29uQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbnNNb2R1bGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KElDT05fU0VUX1RPS0VOKSBAT3B0aW9uYWwoKSBpY29uczogYW55KSB7XHJcbiAgICAvLyBpZiB0aGVyZSBhcmUgbm8gaWNvbnMgZGVmaW5lZCB0aGVuIHRoZSB1c2VyIGhhcyBsaWtlbHkgZm9yZ290dGVuIHRvIHVzZSB0aGVcclxuICAgIC8vIGB3aXRoSWNvbnNgIHN0YXRpYyBmdW5jdGlvbiB3aGVuIGltcG9ydGluZ1xyXG4gICAgaWYgKCFpY29ucykge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ05vIGljb25zIGhhdmUgYmVlbiBpbmNsdWRlZC4gSW1wb3J0IEljb25zTW9kdWxlLndpdGhJY29ucyh7IC4uLiB9KSB0byBpbmNsdWRlIHNvbWUgaWNvbnMuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmUgdGhlIGljb25zIHRoYXQgeW91IHdpc2ggdG8gaW5jbHVkZSBpbiB0aGUgYXBwbGljYXRpb24uXHJcbiAgICogRWFjaCBtb2R1bGUgY2FuIGNob29zZSB3aGljaCBpY29ucyB0byBpbmNsdWRlIHRvIGltcHJvdmVcclxuICAgKiB0cmVlLXNoYWthYmlsaXR5XHJcbiAgICogQHBhcmFtIGljb25zIFRoZSBsaXN0IG9mIGljb25zIHRvIGluY2x1ZGVcclxuICAgKi9cclxuICBzdGF0aWMgd2l0aEljb25zKGljb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogTW9kdWxlV2l0aFByb3ZpZGVyczxJY29uc01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEljb25zTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IElDT05fU0VUX1RPS0VOLCB1c2VWYWx1ZTogaWNvbnMsIG11bHRpOiB0cnVlIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ImxAssetComponent } from "./imx-asset/imx-asset.component";
import { NavbarComponent } from "./navbar/navbar.component";

const parts = [
    AboutComponent,
    ImxAssetComponent,
    NavbarComponent
]

@NgModule({
    imports: [CommonModule],
    declarations: [...parts],
    exports: [...parts]
})
export class ComponentsModule {}
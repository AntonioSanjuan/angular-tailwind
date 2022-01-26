import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Core modules
const modules = [CommonModule, FormsModule, ReactiveFormsModule]

@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules],
    providers: []
})
export class SharedModule {}
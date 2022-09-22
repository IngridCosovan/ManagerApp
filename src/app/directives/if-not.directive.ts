import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appIfNot]'
})
export class IfNotDirective {
    @Input() set appIfNot(val: boolean) {
        if (!val) {
this.vcf.createEmbeddedView(this.template);
        } else {
this.vcf.clear;
        }
    }
constructor(private template: TemplateRef<any>, private vcf: ViewContainerRef) {

}
}
import { Directive, ElementRef, Input, Output, EventEmitter } from "@angular/core";




@Directive({
    selector: '[changecouleur]'
})
export class ChangeColor {
    @Input() macouleur: string;//attribut de la balise HTML qui a la directive, input c'est tout ce qui est entrant (on recoit de la valeur de variable)
    @Output() result = new EventEmitter(); ////attribut de la balise HTML qui a la directive, input c'est tout ce qui est sortant (on émmet un signal )

    constructor(private el: ElementRef) {
        console.log("ChangeColor est lancé", el);
        console.log("dans constructeur " + this.macouleur);
        el.nativeElement.style = "background: red"; // ne sert plus à rien
        this.result.emit ("coucou");
    }


    ngOnInit() {

        let obj = {msg : "coucou"};
        this.result.emit(obj);
        this.el.nativeElement.style = "background:" + this.macouleur;
        console.log("dans ngOnInit " + this.macouleur);
    }

}
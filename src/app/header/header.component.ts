import { Component, EventEmitter, Output,OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
    @Output() sectionSelected = new EventEmitter<string>()

    constructor(private router:Router){}

    ngOnInit(): void {
        
    }

    onSelect(section:string){
        this.sectionSelected.emit(section);
    }

    onNavigate(route:string){
        this.router.navigate(['/'+ route]);
    }
}
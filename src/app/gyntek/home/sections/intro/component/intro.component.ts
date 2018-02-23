import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../../../../infraestructure/dialogs/service/dialogs.service';
import { EnumTypeD,EnumSizeD,EnumCategoryD,EnumIconD } from '../../../../infraestructure/enums/enumdialog';
import { Router,ActivatedRoute } from '@angular/router';

declare var myExtObject: any;
declare var webGlObject: any;

@Component({
  selector: 'app-intro',
  templateUrl: '../view/intro.component.html',
  styleUrls: ['../view/intro.component.css']
})
export class IntroComponent implements OnInit {


  constructor(private _DialogsService: DialogsService,private router: Router) {
    setTimeout(function() {
   myExtObject.func1();
 }, 2000);

   }

  ngOnInit() {


  }

  openMoreDev(){
 debugger

 //this.router.navigate(['moredev']);
    this._DialogsService.ShowMoreDev().subscribe(data => {
          if(data){

          }
        });

  }

}

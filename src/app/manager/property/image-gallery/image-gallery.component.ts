import { Component,AfterViewInit, OnInit, Input,ViewChild,ElementRef } from '@angular/core';
import {PropertyService} from '../service/property.service';
//import { Property } from '../property';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements AfterViewInit {
  @Input() datasource;
  @Input() datasourceId;

    property_id:any;
    uniqueId:any;
  
    selectedImage;
    delete_this;
  constructor(public propertyService : PropertyService,
              public route:ActivatedRoute,
              public router:Router,) {
  
  //console.log(this.datasourceId);

   }

  ngAfterViewInit() {
    
    

  }
  Delete(delete_Image){
    //Get Property Id from Local Storage
    this.property_id = localStorage.getItem('MyPROPERTY_ID');
    console.log( 'PROPERTY ID '+this.property_id);

    //Get Unique Id from Local Storage
    this.uniqueId = localStorage.getItem('UniqueId');
    console.log( 'UNIQUE ID '+this.uniqueId);
    
    //Get Image Name to be Deleted 
     this.delete_this = delete_Image;
    console.log('File Name '+this.delete_this);

    //Set Image Array to var from localStorage
    var MyImages = JSON.parse(localStorage.getItem("GALLERY"));
    console.log(MyImages);
     var index = MyImages.indexOf(this.delete_this)
    console.log('Index IS '+index);
      if (index > -1) {
        MyImages.splice(index, 1);
      }

      //Now Pass this updated Array to BackEnd
      console.log(MyImages);
      let prop_details={
        property_images:MyImages
      }
       this.propertyService.updateGalleryProperty(this.property_id,prop_details)
        .subscribe(()=> this.goBack(this.uniqueId))
 }
   goBack(uniqueId){
     console.log(uniqueId);
     console.log('Going Back...');
     //this.router.navigate(['/property/display-property/',uniqueId])
     this.router.navigate(['/property/leased-properties/'])
    
     //pass that unique Id and redirect to View Property Page

   }   
   setSelectedImage(image){
      this.selectedImage = image;	
     // console.log('HELLO FROM SELECTED');
   }
    navigate(forward){
      console.log('I am HERE');
   var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
   if(index >= 0 && index < this.datasource.length){
      this.selectedImage = this.datasource[index];	
   }
}


}

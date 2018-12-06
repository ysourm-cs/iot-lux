import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { RoomService } from '../../services/room.service';
import { Room } from '../../model/room';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute,
  private roomService : RoomService ) { }

  room : Room;

  id: number;
  private sub: any;

  ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.roomService.getRoom(this.id).subscribe(result=>this.room=result);

      })
    // this.route.params.forEach( params=>{
    //   const id= params['id'];
    //   this.roomService.getRoom(id).subscribe(result=>this.room=result);
    // }
      
    // );  


    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // console.log("id", id);
    // this.roomService.getRoom(id).subscribe(result=>this.room=result);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}



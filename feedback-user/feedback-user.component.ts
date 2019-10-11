import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {Feedback} from '../feedback.model'


@Component({
  selector: 'app-feedback-user',
  templateUrl: './feedback-user.component.html',
  styleUrls: ['./feedback-user.component.css']
})
export class FeedbackUserComponent implements OnInit {
feedbacks:Feedback[];
qualityPoor=0;
qualityBelowAverage=0;
qualityAverage=0;
qualityGood=0;
qualityVeryGood=0;
quantityPoor=0;
quantityBelowAverage=0;
quantityAverage=0;
quantityGood=0;
quantityVeryGood=0;
pricePoor=0;
priceBelowAverage=0;
priceAverage=0;
priceGood=0;
priceVeryGood=0;
servicePoor=0;
serviceBelowAverage=0;
serviceAverage=0;
serviceGood=0;
serviceVeryGood=0;
percnExcQual;
percnGoodQual;
percnAverageQual;
percnBelowQual;
percnPoorQual;
percnExcQuan;
percnGoodQuan;
percnAverageQuan;
percnBelowQuan;
percnPoorQuan;
percnExcPrice;
percnGoodPrice;
percnAveragePrice;
percnBelowPrice;
percnPoorPrice;
percnExcService;
percnGoodService;
percnAverageService;
percnBelowService;
percnPoorService;
  constructor(private User: UserService, private router: Router) { }

  ngOnInit() {
    this.showFeedback();
    
  }
  showFeedback()
  {
   // this.User.getAllfeedback().subscribe((data:userFeedbackSchema) =>{
     // this.feedbacks=data;
      //console.log(this.feedbacks)

    //})
    this.User.getAllfeedback().subscribe( (data:Feedback[]) =>{
      this.feedbacks=data;
    //  console.log(JSON.stringify(data));
     // let data1:String=JSON.parse(data);
      //console.log(this.feedbacks)
    
      console.log(this.feedbacks);

      for (let i in this.feedbacks)
      {
        if (this.feedbacks[i].quality=='poor')
                this.qualityPoor++;
        else if (this.feedbacks[i].quality=='BelowAverage')
                this.qualityBelowAverage++;
        else if (this.feedbacks[i].quality=='average')
        {
                this.qualityAverage++;
        }
        else if (this.feedbacks[i].quality=='good')
                this.qualityGood++;
        else if  (this.feedbacks[i].quality=='Excellent')
        {
                console.log(this.feedbacks[i].quality)
                console.log(this.qualityVeryGood)
                this.qualityVeryGood++;

        }

        if (this.feedbacks[i].quantity=='poor')
                this.quantityPoor++;
        else if (this.feedbacks[i].quantity=='BelowAverage')
        {
                console.log("hello")
                this.quantityBelowAverage++;
        }

        else if (this.feedbacks[i].quantity=='average')
                this.quantityAverage++;
        else if (this.feedbacks[i].quantity=='good')
                this.quantityGood++;
        else  if  (this.feedbacks[i].quantity=='excellent')
                this.quantityVeryGood++;
        

        if (this.feedbacks[i].price=='poor')
                this.pricePoor++;
        else if (this.feedbacks[i].price=='BelowAverage')
                this.qualityBelowAverage++;
        else if (this.feedbacks[i].price=='average')
                this.priceAverage++;
        else if (this.feedbacks[i].price=='good')
                this.priceGood++;
        else if (this.feedbacks[i].price=='excellent')
                this.priceVeryGood++;

        if (this.feedbacks[i].service=='poor')
                this.servicePoor++;
        else if (this.feedbacks[i].service=='BelowAverage')
                this.serviceBelowAverage++;
        else if (this.feedbacks[i].service=='average')
                this.serviceAverage++;
        else if (this.feedbacks[i].service=='good')
                this.serviceGood++;
        else if (this.feedbacks[i].service=='excellent')
                this.serviceVeryGood++;
      }

      
    //console.log(this.qualityVeryGood)
       this.percnExcQual=(this.qualityVeryGood/this.feedbacks.length)*100;
       this.percnExcQual=this.percnExcQual.toFixed(2)
      var p1=this.percnExcQual+"%";
      //console.log(p1)
    document.getElementById('1').style.width = p1;
    this.percnGoodQual=(this.qualityGood/this.feedbacks.length)*100;
    this.percnGoodQual=this.percnGoodQual.toFixed(2)
    var p2=this.percnGoodQual+"%";
      //console.log(p2)
    document.getElementById('2').style.width = p2;
    this.percnAverageQual=(this.qualityAverage/this.feedbacks.length)*100;
    this.percnAverageQual=this.percnAverageQual.toFixed(2)
    var p3=this.percnAverageQual+"%";
      //console.log(p3)
    document.getElementById('3').style.width = p3;
    this.percnBelowQual=(this.qualityBelowAverage/this.feedbacks.length)*100;
    this.percnBelowQual=this.percnBelowQual.toFixed(2)
    var p4=this.percnBelowQual+"%";
      //console.log(p4)
    document.getElementById('4').style.width = p4;
    this.percnPoorQual=(this.qualityPoor/this.feedbacks.length)*100;
    this.percnPoorQual=this.percnPoorQual.toFixed(2)
    var p5=this.percnPoorQual+"%";
      //console.log(p5)
    document.getElementById('5').style.width = p5;




    this.percnExcQuan=(this.quantityVeryGood/this.feedbacks.length)*100;
    this.percnExcQuan=this.percnExcQuan.toFixed(2)
      var p1=this.percnExcQuan+"%";
    //  console.log(p1)
    document.getElementById('6').style.width = p1;
    this.percnGoodQuan=(this.quantityGood/this.feedbacks.length)*100;
    this.percnGoodQuan=this.percnGoodQuan.toFixed(2)
    var p2=this.percnGoodQuan+"%";
      //console.log(p2)
    document.getElementById('7').style.width = p2;
    this.percnAverageQuan=(this.quantityAverage/this.feedbacks.length)*100;
    this.percnAverageQuan=this.percnAverageQuan.toFixed(2)
    var p3=this.percnAverageQuan+"%";
      console.log(p3)
    document.getElementById('8').style.width = p3;
    this.percnBelowQuan=(this.quantityBelowAverage/this.feedbacks.length)*100;
    this.percnBelowQuan=this.percnBelowQuan.toFixed(2)
    var p4=this.percnBelowQuan+"%";
      //console.log(p4)
    document.getElementById('9').style.width = p4;
    this.percnPoorQuan=(this.quantityPoor/this.feedbacks.length)*100;
    this.percnPoorQuan=this.percnPoorQuan.toFixed(2)
    var p5=this.percnPoorQuan+"%";
      //console.log(p5)
    document.getElementById('10').style.width = p5;



    this.percnExcPrice=(this.priceVeryGood/this.feedbacks.length)*100;
    this.percnExcPrice=this.percnExcPrice.toFixed(2)
      var p1=this.percnExcPrice+"%";
    //  console.log(p1)
    document.getElementById('11').style.width = p1;
    this.percnGoodPrice=(this.priceGood/this.feedbacks.length)*100;
    this.percnGoodPrice=this.percnGoodPrice.toFixed(2)
    var p2=this.percnGoodPrice+"%";
      //console.log(p2)
    document.getElementById('12').style.width = p2;
    this.percnAveragePrice=(this.priceAverage/this.feedbacks.length)*100;
    this.percnAveragePrice=this.percnAveragePrice.toFixed(2)
    var p3=this.percnAveragePrice+"%";
      console.log(p3)
    document.getElementById('13').style.width = p3;
    this.percnBelowPrice=(this.priceBelowAverage/this.feedbacks.length)*100;
    this.percnBelowPrice=this.percnBelowPrice.toFixed(2)
    var p4=this.percnBelowPrice+"%";
      //console.log(p4)
    document.getElementById('14').style.width = p4;
    this.percnPoorPrice=(this.pricePoor/this.feedbacks.length)*100;
    this.percnPoorPrice=this.percnPoorPrice.toFixed(2)
    var p5=this.percnPoorPrice+"%";
      //console.log(p5)
    document.getElementById('15').style.width = p5;


    this.percnExcService=(this.serviceVeryGood/this.feedbacks.length)*100;
    this.percnExcService=this.percnExcService.toFixed(2)
      var p1=this.percnExcService+"%";
    //  console.log(p1)
    document.getElementById('16').style.width = p1;
    this.percnGoodService=(this.serviceGood/this.feedbacks.length)*100;
    this.percnGoodService=this.percnGoodService.toFixed(2)
    var p2=this.percnGoodService+"%";
      //console.log(p2)
    document.getElementById('17').style.width = p2;
    this.percnAverageService=(this.serviceAverage/this.feedbacks.length)*100;
    this.percnAverageService=this.percnAverageService.toFixed(2)
    var p3=this.percnAverageService+"%";
      console.log(p3)
    document.getElementById('18').style.width = p3;
    this.percnBelowService=(this.serviceBelowAverage/this.feedbacks.length)*100;
    this.percnBelowService=this.percnBelowService.toFixed(2)
    var p4=this.percnBelowPrice+"%";
      //console.log(p4)
    document.getElementById('19').style.width = p4;
    this.percnPoorService=(this.servicePoor/this.feedbacks.length)*100;
    this.percnPoorService=this.percnPoorService.toFixed(2)
    var p5=this.percnPoorService+"%";
      //console.log(p5)
    document.getElementById('20').style.width = p5;
    
     
    })
  }

 



}

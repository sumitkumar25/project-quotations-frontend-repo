import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-canvas-primer',
  templateUrl: './canvas-primer.component.html',
  styleUrls: ['./canvas-primer.component.scss']
})
export class CanvasPrimerComponent implements OnInit {
  @ViewChild("canvasEl", { read: ElementRef, static: true }) canvasEl: ElementRef;

  ctx: CanvasRenderingContext2D;

  _x = 0;
  _y = 0;

  constructor() { }

  ngOnInit() {
    this.getCanvasContext();
    this.setUpSection(0);
    this.moveTo(10, 10);
    this.drawCanvasGrid();
    this.moveTo(20, 20);
    this.drawRectangles();
    this.moveTo(130, 20);
    this.drawTriangles();
    this.moveTo(200, 20);
    this.drawSmileys();
    this.moveTo(20, 150);
    this.setUpSection(1);
    this.moveTo(this._x, this._y + 30);
    this.drawWithPath2d();
    this.moveTo(this._x, this._y + 100);
    this.setUpSection(2);
  }
  drawWithPath2d() {
    const obj = new Path2D();
    obj.arc(this._x + 50, this._y + 50, 40, 0, 2 * Math.PI);
    this.ctx.fill(obj);
  }
  private testCursor() {
    this.ctx.lineTo(this._x + 50, this._y + 50);
    this.ctx.stroke();
  }

  setUpSection(sectionNo) {
    let text = '';
    switch (sectionNo) {
      case 0:
        text = 'Basic context shapes'
        break;
      case 1:
        text = 'Path 2D'
        this.ctx.lineTo(500, 150);
        this.ctx.stroke();
        break;
      case 2:
        text = 'Colors'
        this.ctx.lineTo(500, 150);
        this.ctx.stroke();
        break;
      default:
        this.ctx.lineTo(500, this._y);
        this.ctx.stroke();
        text = 'Section';
    }
    this.ctx.fillStyle = "black";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(text, this._x, this._y + 30);
  }

  /**
   * 
   * @param x 
   * @param y 
   * assume context will be back to the same position.
   */
  moveTo(x, y) {
    this.ctx.moveTo(x, y);
    this._x = x;
    this._y = y;
  }
  drawCanvasGrid() {
    this.ctx.lineTo(510, 10);
    this.ctx.lineTo(510, 510);
    this.ctx.lineTo(10, 510);
    this.ctx.lineTo(10, 10);
    this.ctx.stroke();
  }
  drawRectangles() {
    this.ctx.fillStyle = 'rgb(200, 0, 0)';
    // fill rectangle
    this.ctx.fillRect(this._x + 25, this._y + 25, 50, 50);
    // stroke rectangle
    this.ctx.strokeRect(this._x, this._y, 100, 100);
    this.ctx.strokeRect(this._x + 10, this._y + 10, 90, 90);
  }
  drawTriangles() {
    this.ctx.beginPath();
    // move the pen to starting point.
    this.ctx.moveTo(this._x, this._y);

    this.ctx.lineTo(this._x, this._y);
    this.ctx.lineTo(this._x + 50, this._y + 50);
    this.ctx.lineTo(this._x, this._y + 100);
    this.ctx.lineTo(this._x, this._y);
    this.ctx.stroke();
  }
  drawSmileys() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "yellow"
    this.ctx.arc(this._x + 50, this._y + 50, 50, 0, Math.PI * 2, true); // Outer circle
    this.ctx.fill();
    this.moveTo(this._x + 80, this._y + 50);
    this.ctx.arc(this._x - 30, this._y, 30, 0, Math.PI, false);
    this.ctx.lineTo(this._x, this._y);

    this.moveTo(this._x - 20, this._y - 20);
    this.ctx.arc(this._x, this._y, 5, 0, Math.PI * 2, false);

    this.moveTo(this._x - 20, this._y);
    this.ctx.arc(this._x, this._y, 5, 0, Math.PI * 2, false);

    this.ctx.stroke();
  }
  getCanvasContext() {
    this.ctx = this.canvasEl.nativeElement.getContext('2d');
  }

}
